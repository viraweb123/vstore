/**
 * Contains some utility functions
 */

export const toBoolean = (val) => val === 'false' || val === 'undefined' || val === 'null' || val === '0' ||
	val === false || val === undefined || val === null || val === 0 ? false : !!val;
