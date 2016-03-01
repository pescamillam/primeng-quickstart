import {Component} from 'angular2/core';
import {InputText} from 'primeng/primeng';
import {LineChart} from 'primeng/primeng';
import {Message} from "primeng/primeng";

@Component({
	selector: 'my-app',
	template: `
        <p-growl [value]="msgs"></p-growl>

		<h3 class="first">Basic</h3>
		<p-lineChart [value]="data" width="640" height="320"></p-lineChart>

		<h3>Interactive and Customized</h3>
		<p-lineChart [value]="data" width="640" height="320" [bezierCurve]="false" [datasetFill]="false" (onPointsSelect)="onSelect($event)"></p-lineChart>
    `,
    directives: [InputText, LineChart]
})
export class AppComponent {
	data: any;

	msgs: Message[];

	constructor() {
		this.data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'My First dataset',
					fillColor: 'rgba(220,220,220,0.2)',
					strokeColor: 'rgba(220,220,220,1)',
					pointColor: 'rgba(220,220,220,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: 'My Second dataset',
					fillColor: 'rgba(151,187,205,0.2)',
					strokeColor: 'rgba(151,187,205,1)',
					pointColor: 'rgba(151,187,205,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(151,187,205,1)',
					data: [28, 48, 40, 19, 86, 27, 90]
				}
			]
		}
	}

	onSelect(event) {
		if(event.points) {
			this.msgs = [];
			for(var i = 0; i < event.points.length; i++) {
				this.msgs.push({severity: 'info', summary: 'Points Selected', 'detail': event.points[i].value});
			}

		}
	}
}