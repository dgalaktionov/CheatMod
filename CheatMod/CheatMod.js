(function () {
	var ready = function () {
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "mods/CheatMod/source/styles.css"
		}).appendTo("head");
	};

	var error = function () {
	};

	GDT.loadJs(['mods/CheatMod/source/source.js'], ready, error);
})();