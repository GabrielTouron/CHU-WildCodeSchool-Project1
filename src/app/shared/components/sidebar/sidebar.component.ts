
import { Component, OnInit } from '@angular/core';
import { faCoffee, faAddressCard, faHamburger, faUser, faBars, faTimes, faDiceD20, faClinicMedical, faPeopleCarry, faHospitalSymbol, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  constructor(library: FaIconLibrary) {
    
    library.addIcons(faCoffee);
    library.addIcons(faStethoscope);
    library.addIcons(faPeopleCarry);
    library.addIcons(faUser);
    library.addIcons(faAddressCard);
    library.addIcons(faDiceD20);
    library.addIcons(faBars);
    library.addIcons(faTimes);
    library.addIcons(faHospitalSymbol);
    
  }

  ngOnInit(): void {
  }

}




 
