---
title: Hello world
layout: base.njk
---

# Wow what a surprise.

This is a long text with all sorts of things to prove that I can write things for a better distance. I would like to also tell you that there are a few things that are better left unsaid, but what about some other things. 

We should also talk about that part of our conversation that we have not even talked to anyone yet.


### Latest Posts

{% for post in collections.posts%}
[{{post.data.title}}]({{post.url}})
{% endfor %}