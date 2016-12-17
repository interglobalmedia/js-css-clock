This is the second project in the JavaScript30 series created by WesBos. It is a clock created with CSS, CSS animation, and JavaScript.

After finishing the project as is, I tackled the issue of the minute hand not advancing as it should, thereby causing the second hand to skip a couple of seconds when crossing over the 12 mark. The minute hand also went backward 90 degrees. I created a fix for it, but then when I checked it in Safari, I found that it did not work there! That's because the transform property did not work there properly. I had to add a prefix to it in my JavaScript.

If I really wanted to make things work properly and not worry about which prefixes should be used to make sure that the transform property worked across all browsers, I would add a mini workflow and use autoprefixer. That would do the trick. But for now, a Safari fix will just have to do for this mini project. The main thing is that the issue is recognized and addressed.

 A great resource I came across regarding CSS Animations and specifically clocks as well, is https://cssanimation.rocks/clocks/. It thoroughly explained the out of sync issue regarding the second and minute hands and pointed out the transform cross-browser issue.
