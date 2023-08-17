/*	
 * Copyright 2017 Denis Martin.  This file is part of swadit.
 * 
 * swadit is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * swadit is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with swadit.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApisService } from 'app/shared/services';

@Component({
	selector: 'swadit-array-editor',
	templateUrl: './array-editor.component.html',
	styleUrls: ['./schema-editor.component.scss']
})
export class ArrayEditorComponent implements OnInit
{
	@Input() schema: any;
	@Input() id: string;

	private _obj: any;
	@Input() 
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	get obj() { 
		return this._obj; 
	}

	@Output() objChange = new EventEmitter<any>();
	// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
	set obj(val) 
	{
		this._obj = val;
		this.objChange.emit(this._obj);
	}

	public itemToAdd: any;
	public noItemToAdd: boolean = false;

	public itemsSchema: any = {};

	constructor(public apis: ApisService) {}

	ngOnInit(): void {
		if (!this._obj) {
			this._obj = [];
		}
		this.schema = this.apis.resolveObj(this.schema, this.apis.schemas.root);
		this.itemsSchema = this.apis.resolveObj(this.schema['items'], this.apis.schemas.root);
		if (this.itemsSchema['type'] == 'object') {
			this.itemToAdd = {};
		} else {
			this.itemToAdd = null;
		}
	}

	addItem(event: any): void
	{
		event.preventDefault();
		console.log("addItem", this.itemToAdd);
		if (!this.itemToAdd) {
			this.noItemToAdd = true;
			return;
		}
		this.noItemToAdd = false;
		this.obj.push(this.itemToAdd);
		if (this.itemsSchema['type'] == 'object') {
			this.itemToAdd = {};
		} else {
			this.itemToAdd = null;
		}
	}

	deleteItem(event: any, i: number): void
	{
		event.preventDefault();
		console.log("deleteItem", i);
		this.obj.splice(i, 1);
	}

	moveItemUp(event: any, i: number): void
	{
		if (i > 0) {
			const items = this.obj.splice(i, 1);
			this.obj.splice(i-1, 0, items[0]);
		}
	}

	moveItemDown(event: any, i: number): void
	{
		if (i < this.obj.length) {
			const items = this.obj.splice(i, 1);
			this.obj.splice(i+1, 0, items[0]);
		}
	}

	trackByIndex(index: number, item: any): number {
		return index;
	}
}
