jQuery.fn.autoGrow = function(options){
	
	var defaults = {
		maxHeight: 200
	};
	
	return this.each(function(){
		// Variables
		var colsDefault = this.cols;
		var rowsDefault = this.rows;
		
		var opts = $.extend({}, defaults, options || {});
				
		//Functions
		var grow = function() {

			if ( $(this).height() < opts.maxHeight ) {
				this.style.overflow = "hidden";
				growByRef(this);
			} else {
				this.style.overflowY = "scroll";
			}

		}
		
		var growByRef = function(obj) {
			var linesCount = 0;
			var lines = obj.value.split('\n');
			
			for (var i=lines.length-1; i>=0; --i)
			{
				linesCount += Math.floor((lines[i].length / colsDefault) + 1);
			}

			if (linesCount >= rowsDefault) {
				
				obj.rows = linesCount + 1;
				
				if ( $(obj).height() > opts.maxHeight )
					$(obj).height( opts.maxHeight );
				
				
			} else {
				
				obj.rows = rowsDefault;
				
			}
		}
		
		var characterWidth = function (obj){
			var characterWidth = 0;
			var temp1 = 0;
			var temp2 = 0;
			var tempCols = obj.cols;
			
			obj.cols = 1;
			temp1 = obj.offsetWidth;
			obj.cols = 2;
			temp2 = obj.offsetWidth;
			characterWidth = temp2 - temp1;
			obj.cols = tempCols;
			
			return characterWidth;
		}
		
		// binding
		this.onkeyup = grow;
		this.onfocus = grow;
		this.onblur = grow;
		// Manipulations
	//	this.style.width = "auto";
		this.style.height = "auto";
		this.style.overflow = "hidden";
		
		if ($(this).val()) {
	//		this.style.width = ((characterWidth(this) * this.cols) + 6) + "px";			
			growByRef(this);
		}
	});
};