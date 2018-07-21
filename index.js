#!/usr/bin/env node --no-warnings
'use strict';
const trash = require('trash');

(async () => {
	try {
		await trash('.git*');
		console.log('🗑 Destroyed git repository!');
	} catch (e) {
		console.error('💥 There was an error while destroying repository.');
		console.error(e);
	}
})();
