import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'Angular 7'
  results: string[] = []

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('up and running!')
  }
  public onSearch(searchTerm): void {
    console.log('search', searchTerm)
    this.results.push(searchTerm)
    this.changeDetectorRef.detectChanges()
  }
}
