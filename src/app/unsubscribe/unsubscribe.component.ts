import { HttpRequestsService } from './../http-requests.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  errorMessageEnabled = false;
  pendingMessageEnabled = false;
  errorMessage = '';
  private key: string;

  constructor(private route: ActivatedRoute, private httpService: HttpRequestsService, private router: Router) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
  }

  unsubscribe() {
    this.errorMessageEnabled = false;
    this.pendingMessageEnabled = true;
    const body = { key: this.key };
    this.httpService.postRequest('unsubscribe', body).subscribe(
      msg => {
        console.log(msg);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.pendingMessageEnabled = false;
        this.errorMessageEnabled = true;
        this.errorMessage = err;
      }
    );
  }

}
