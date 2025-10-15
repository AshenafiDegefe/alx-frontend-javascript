export function insertRow(row: object): number;

/**
 * Deletes a row based on its ID.
 * @param {number} rowId - The ID of the row to delete.
 */
export function deleteRow(rowId: number): void;

/**
 * Updates an existing row.
 * @param {number} rowId - The ID of the row to update.
 * @param {Object} row - The new row data.
 * @returns {number} The ID of the updated row.
 */
export function updateRow(rowId: number, row: object): number;