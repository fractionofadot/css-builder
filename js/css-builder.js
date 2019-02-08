	var object_of_focus = document.getElementById('0');
	var object_counter = 0;
	var suggestions_counter = -1;
	var properties = ["align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-boundary","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","box-snap","box-suppress","break-after","break-before","break-inside","caption-side","caret","caret-color","caret-shape","chains","clear","clip","clip-path","clip-rule","color","color-interpolation-filters","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","counter-set","crop","cue","cue-after","cue-before","cursor","direction","display","display-inside","display-list","display-outside","dominant-baseline","elevation","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flood-color","flood-opacity","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-max-size","font-min-size","font-optical-sizing","font-palette","font-presentation","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letters","initial-letters-align","initial-letters-wrap","inline-sizing","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-grid","line-height","line-snap","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marker-side","marks","mask","mask-box","mask-box-outset","mask-box-repeat","mask-box-slice","mask-box-source","mask-box-width","mask-clip","mask-image","mask-origin","mask-position","mask-repeat","mask-size","mask-source-type","mask-type","max-height","max-lines","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","polar-anchor","polar-angle","polar-distance","polar-origin","position","presentation-level","quotes","region-fragment","resize","rest","rest-after","rest-before","richness","right","row-gap","ruby-align","ruby-merge","ruby-position","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-margin","scroll-snap-margin-block","scroll-snap-margin-block-end","scroll-snap-margin-block-start","scroll-snap-margin-bottom","scroll-snap-margin-inline","scroll-snap-margin-inline-end","scroll-snap-margin-inline-start","scroll-snap-margin-left","scroll-snap-margin-right","scroll-snap-margin-top","scroll-snap-stop","scroll-snap-type","shape-image-threshold","shape-inside","shape-outside","shape-margin","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-shadow","text-space-collapse","text-transform","text-underline-position","text-wrap","touch-action","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unioption-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","wrap-flow","wrap-through","writing-mode","z-index"];

	loadSaved("demo");

	function insertElement(element) {
		object_counter = object_counter + 1;

		var node = document.createElement(element);

		node.setAttribute("id",object_counter);
		node.setAttribute("onclick", "selectObject(this)");
		node.setAttribute("class", "rwp-default");
		node.setAttribute("draggable", "true");

		editable = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'];

		if (editable.indexOf(element) > -1) {
			node.setAttribute("contentEditable", "true");
			node.style.outline = "none";
		}


		document.getElementById(object_of_focus.id).appendChild(node);	

		saveProgress(document.getElementById("save-name").value);
		
	}

	function insertText(text) {
		object_counter = object_counter + 1;
		var node = document.createTextNode(text);

		document.getElementById(object_of_focus.id).appendChild(node);
		saveProgress(document.getElementById("save-name").value);
	}

	function selectObject(selected_object) {
		// display the id of the div we have selected.
		object_of_focus.style.borderColor = "black";
		object_of_focus = selected_object;
		document.getElementById("object_of_focus").innerHTML = object_of_focus.id;
		selected_object.style.borderColor = "red";
		this.event.stopPropagation();	
	}

	function styleObject() {
		property = document.getElementById("property").value

		object_of_focus.style[property] = document.getElementById("value").value;
		saveProgress(document.getElementById("save-name").value);
		return false;
	}

	function clearSuggestions(suggestions) {
		while (suggestions.firstChild) {
			suggestions.removeChild(suggestions.firstChild);
		}
	}

	function selectProperty(e) {
		var suggestions = document.getElementById("suggestions");
		if(! suggestions.children[suggestions_counter]) {
			suggestions_counter = -1;
		}

		if (e.key === 'Tab' || e.key === 'Enter') {
			var clickIt = new Event('click');

			if (suggestions.children[suggestions_counter]) {
				suggestions.children[suggestions_counter].dispatchEvent(clickIt);
				return false;
			} else if (suggestions.firstChild) {
				suggestions.firstChild.dispatchEvent(clickIt);
				return false;
			}
		} else if (e.key == 'ArrowDown') {
			if(suggestions.children.length-1 > suggestions_counter) {
				for (var i=0; i<suggestions.children.length; i++) {
					suggestions.children[i].style.backgroundColor = 'unset';
				}
				suggestions_counter++;
				suggestions.children[suggestions_counter].style.backgroundColor = 'lightgray';
			} else {
				suggestions_counter = suggestions.children.length - 1;
			}
		} else if (e.key == 'ArrowUp') {
			if (suggestions_counter > 0) {
				suggestions.children[suggestions_counter].style.backgroundColor = 'unset';
				suggestions_counter--;
				suggestions.children[suggestions_counter].style.backgroundColor = 'lightgray';
			} 
		} else {
			return false;
		}
		return false;
	}
	

	function suggestProperties() {
		var suggestions = document.getElementById("suggestions");

		document.getElementById("property").addEventListener("input", function(e) {

			property = document.getElementById("property").value

			clearSuggestions(suggestions);

			if (!property) { return false;}

			for (i = 0; i < properties.length; i++) {
				if (properties[i].toUpperCase().indexOf(property.toUpperCase()) !== -1) {

					var match = document.createElement("li");

					match.addEventListener("click", function () {
						document.getElementById("property").value = this.innerHTML;
						clearSuggestions(suggestions);
						return false;
					});

					match.appendChild(document.createTextNode(properties[i]));

					if (properties[i].toUpperCase() === property.toUpperCase()) {
						clearSuggestions(suggestions);
						return false;
					}
					suggestions.appendChild(match);
				}
			}
		});

	}

	function remove(element) {
		element.parentNode.removeChild(element);
		object_of_focus = document.getElementById("demo-area");
		document.getElementById("object_of_focus").innerHTML = object_of_focus.id;
	}

	function clearSelection() {
		object_of_focus.style.borderColor = "black";
		object_of_focus = document.getElementById("demo-area");
		document.getElementById("object_of_focus").innerHTML = object_of_focus.id;
		this.event.stopPropagation();
	}

	function dragStart(event) {
		dragged_item = event.target;
	}

	function dragOver(event) {
		event.preventDefault()
	}
	function dragEnter(event) {
		event.preventDefault()
	}
	function drop(event) {
		event.preventDefault();
		dragged_item.parentNode.removeChild(dragged_item);
		event.target.appendChild(dragged_item);
	}

	function saveProgress(name) {
		sessionStorage.setItem(name, document.getElementById("demo-area").innerHTML);
	}

	function loadSaved(name) {
		if (sessionStorage.getItem(name)) {
			document.getElementById("demo-area").innerHTML = (sessionStorage.getItem(name));
		}
		
	}

	document.addEventListener("dragstart", dragStart);
	document.addEventListener("dragover", dragOver);
	document.addEventListener("dragenter", dragEnter);
	document.addEventListener("drop", drop);

	document.getElementById("property").addEventListener("keydown", selectProperty);

	suggestProperties();