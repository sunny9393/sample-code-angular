import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.checkBrowserCompatibility();
  }

  checkBrowserCompatibility(): void {
    const isUnsupported = /MSIE|Trident|Edge/.test(window.navigator.userAgent);
    const browser = this.deviceService.browser;
    const os = this.deviceService.os;
    
    console.log(`Browser: ${browser}`);
    console.log(`Operating System: ${os}`);

    if (browser === 'IE' || browser === 'Edge' || browser === 'MS-Edge-Chromium') {
      alert('This application may not work properly on Internet Explorer or Edge.');
    }

    if (isUnsupported) {
      alert('You are using an unsupported browser. Please switch to a modern browser for the best experience.');
    }
  }
}


 