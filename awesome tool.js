	function make() {
	var a = Math.floor((Math.random() * 50) + 1);
    var b = Math.floor((Math.random() * 50) + 1);
    var c = Math.floor((Math.random() * 50) + 1);
    var d = Math.floor((Math.random() * 50) + 1);
    var e = Math.floor((Math.random() * 50) + 1);
    var f = Math.floor((Math.random() * 50) + 1);
    var g = Math.floor((Math.random() * 50) + 1);
    var h = "&#128515";
    var i = "&#1500";
    var j = "&#1494";
    var k = "&#1502";
    var l = "&#128522";
    var text = ""+a+", "+b+", "+c+", "+d+", "+e+", "+f+", "+g+"";
    

    if (a !== b && a !== c && a !== d && a !== e && a !== f && a !== g && b !== c && b !== d &&
        b !== e && b !== f && b !== g && c !== d && c !== e && c !== f && c !== g && d !== e &&
        d !== f && d !== g && e !== f && e !== g && f !== g) {   

        document.getElementById("demo1").innerHTML = a;
        document.getElementById("demo2").innerHTML = b;
        document.getElementById("demo3").innerHTML = c;
        document.getElementById("demo4").innerHTML = d;
        document.getElementById("demo5").innerHTML = e;
        document.getElementById("demo6").innerHTML = f;
        document.getElementById("demo7").innerHTML = g;
        document.getElementById("demo8").innerHTML = h;
        document.getElementById("demo9").innerHTML = i;
        document.getElementById("demo10").innerHTML = j;
        document.getElementById("demo11").innerHTML = k;
        document.getElementById("demo12").innerHTML = l;


    } else {
        console.log(text);
         }
    }
  
    function make649() {
	var a = Math.floor((Math.random() * 49) + 1);
    var b = Math.floor((Math.random() * 49) + 1);
    var c = Math.floor((Math.random() * 49) + 1);
    var d = Math.floor((Math.random() * 49) + 1);
    var e = Math.floor((Math.random() * 49) + 1);
    var f = Math.floor((Math.random() * 49) + 1);
    var g = "&#128522";
    var h = "&#128515";
    var i = "&#1500";
    var j = "&#1494";
    var k = "&#1502";
    var l = "&#128522";
    var text = ""+a+", "+b+", "+c+", "+d+", "+e+", "+f+"";
    

    if (a !== b && a !== c && a !== d && a !== e && a !== f && b !== c && b !== d &&
        b !== e && b !== f && c !== d && c !== e && c !== f && d !== e &&
        d !== f && e !== f && e !== g) {   

        document.getElementById("demo1").innerHTML = a;
        document.getElementById("demo2").innerHTML = b;
        document.getElementById("demo3").innerHTML = c;
        document.getElementById("demo4").innerHTML = d;
        document.getElementById("demo5").innerHTML = e;
        document.getElementById("demo6").innerHTML = f;
        document.getElementById("demo7").innerHTML = g;
        document.getElementById("demo8").innerHTML = h;
        document.getElementById("demo9").innerHTML = i;
        document.getElementById("demo10").innerHTML = j;
        document.getElementById("demo11").innerHTML = k;
        document.getElementById("demo12").innerHTML = l;

    } else {
        console.log(text);
         }
    }

    function hasClassName(inElement, inClassName)
    {
        var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
        return regExp.test(inElement.className);
    }

    function addClassName(inElement, inClassName)
    {
        if (!hasClassName(inElement, inClassName))
            inElement.className = [inElement.className, inClassName].join(' ');
    }

    function removeClassName(inElement, inClassName)
    {
        if (hasClassName(inElement, inClassName)) {
            var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
            var curClasses = inElement.className;
            inElement.className = curClasses.replace(regExp, ' ');
        }
    }

    function toggleClassName(inElement, inClassName)
    {
        if (hasClassName(inElement, inClassName))
            removeClassName(inElement, inClassName);
        else
            addClassName(inElement, inClassName);
    }

    function toggleShape()
    {
      var shape = document.getElementById('shape');
      if (hasClassName(shape, 'ring')) {
        removeClassName(shape, 'ring');
        addClassName(shape, 'cube');
      } else {
        removeClassName(shape, 'cube');
        addClassName(shape, 'ring');
      }
      
      // Move the ring back in Z so it's not so in-your-face.
      var stage = document.getElementById('stage');
      if (hasClassName(shape, 'ring'))
        stage.style.webkitTransform = 'translateZ(-200px)';
      else
        stage.style.webkitTransform = '';
    }
    
    function toggleBackfaces()
    {
      var backfacesVisible = document.getElementById('backfaces').checked;
      var shape = document.getElementById('shape');
      if (backfacesVisible)
        addClassName(shape, 'backfaces');
      else
        removeClassName(shape, 'backfaces');
    }