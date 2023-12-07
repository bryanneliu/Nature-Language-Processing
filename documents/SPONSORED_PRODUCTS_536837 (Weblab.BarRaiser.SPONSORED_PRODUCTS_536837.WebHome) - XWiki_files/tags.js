var XWiki = (function(c) {
    var a = c.viewers = c.viewers || {};
    var csrfToken = document.documentElement.getAttribute("data-xwiki-form-token");
    a.Tags = Class.create({
        initialize: function() {
            $$(".doc-tags .tag-delete").each(this.ajaxTagDelete);
            $$(".doc-tags .tag-add a").each(this.createTagAddForm.bind(this));
            if ($$(".doc-tags .tag-add-form").length > 0) {
                this.ajaxifyForm($$(".doc-tags .tag-add-form")[0])
            }
        },
        ajaxTagDelete: function(d) {
            d.observe("click", function(e) {
                if (e) {
                    e.stop()
                }
                if (!d.disabled) {
                    new Ajax.Request(d.readAttribute("href").replace(/&xredirect=.+$/, "&ajax=1&form_token=" + csrfToken), {
                        onCreate: function() {
                            d.disabled = true;
                            d.notification = new c.widgets.Notification("Deleting tag...", "inprogress")
                        },
                        onSuccess: function() {
                            d.up(".tag-wrapper").remove()
                        },
                        onFailure: function(f) {
                            new c.widgets.Notification(f.responseText || "Server not responding", "error")
                        },
                        on0: function(f) {
                            f.request.options.onFailure(f)
                        },
                        onComplete: function() {
                            d.disabled = false;
                            d.notification.hide()
                        }
                    })
                }
            }.bindAsEventListener())
        },
        createTagAddForm: function(d) {
            d.observe("click", function(e) {
                if (e) {
                    e.stop()
                }
                if (!d._x_form) {
                    if (!d.disabled) {
                        new Ajax.Request(d.readAttribute("href").replace(/#.+$/, "&ajax=1&xpage=documentTags&form_token=" + csrfToken), {
                            onCreate: function() {
                                d.disabled = true;
                                d.notification = new c.widgets.Notification("Fetching form...", "inprogress")
                            },
                            onSuccess: function(f) {
                                var g = d.up();
                                d.remove();
                                g.update(f.responseText);
                                d._x_form = g.firstDescendant();
                                d._x_form._x_activator = d;
                                d._x_form.down("input[type=text]").focus();
                                this.ajaxifyForm(d._x_form)
                            }.bind(this),
                            onFailure: function(f) {
                                new c.widgets.Notification(f.responseText || "Server not responding", "error")
                            },
                            on0: function(f) {
                                f.request.options.onFailure(f)
                            },
                            onComplete: function() {
                                d.disabled = false;
                                d.notification.hide()
                            }
                        })
                    }
                } else {
                    Element.replace(d, d._x_form);
                    d._x_form.down("input[type=text]").focus()
                }
            }.bindAsEventListener(this))
        },
        ajaxifyForm: function(e) {
            e.setAttribute("autocomplete", "off");
            e.down("input[type=text]").setAttribute("autocomplete", "off");
            e.down("input[type=text]").setAttribute("autocomplete", "off");
            e.observe("submit", function(f) {
                f.stop();
                e.down("input[type=text]").focus();
                if (e.tag.value != "") {
                    new Ajax.Request(e.action.replace(/&xredirect=.+$/, "&ajax=1&tag=") + encodeURIComponent(e.tag.value) + "&form_token=" + csrfToken, {
                        onCreate: function() {
                            e.disable();
                            e.notification = new c.widgets.Notification("Adding tag...", "inprogress")
                        },
                        onSuccess: function(g) {
                            var h = new Element("span");
                            h.insert(g.responseText + " ");
                            h.select(".tag-delete").each(this.ajaxTagDelete);
                            while (h.childNodes.length > 0) {
                                e.up(".tag-add").insert({
                                    before: h.firstChild
                                });
                                e.up(".tag-add").insert({
                                    before: " "
                                });
                                h.removeChild(h.firstChild)
                            }
                            e.reset()
                        }.bind(this),
                        onFailure: function(g) {
                            new c.widgets.Notification(g.responseText || "Server not responding", "error")
                        },
                        onComplete: function() {
                            e.enable();
                            e.notification.hide()
                        },
                        on0: function(g) {
                            g.request.options.onFailure(g)
                        }
                    })
                }
            }.bindAsEventListener(this));
            e.observe("reset", function(f) {
                Element.replace(e, e._x_activator)
            }.bindAsEventListener(this));
            var d = new Element("input", {
                type: "reset",
                value: e.down(".button-add-tag-cancel").innerHTML,
                "class": "button secondary"
            });
            e.down(".button-add-tag-cancel").replace(d);
            new c.widgets.Suggest(e.down("input[type=text]"), {
                script: "/bin/view/Main/?xpage=suggestTags&classname=XWiki.TagClass&fieldname=tags&firCol=-&secCol=-&",
                varname: "input",
                seps: "|,",
                shownoresults: false,
                icon: "/resources/icons/silk/tag_yellow.png"
            })
        }
    });

    function b() {
        return new a.Tags()
    }(c.domIsLoaded && b()) || document.observe("xwiki:dom:loaded", b);
    return c
}(XWiki || {}));