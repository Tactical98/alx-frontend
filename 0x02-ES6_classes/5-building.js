export default class Building {
	constructor(sqft) {
		if (
			new.target !== Building && typeof this.evacuationWarningMessage !== 'function'
		) {
			throw new Error(
				'Class extending Building must override evacuationWarningMessage',
			);
		}

		this._sqft = sqft;
	}

	// Sqft getter
	get sqft() {
		return this._sqft;
	}
}
