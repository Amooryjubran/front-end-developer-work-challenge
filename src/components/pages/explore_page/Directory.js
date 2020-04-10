import React from 'react';

import MenuItem from './Explore-menu';
import './explore.css';



class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'COVID-19 Challenge - Low-cost monitoring system for COVID-19 patients',
          text: 'NRC is seeking a low cost system (unit cost <$25) that can continuously measure temperature, peripheral capillary oxygen saturation (SpO2), blood pressure (BP), pulse and respiration rates, and transmit this in...',
          imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/tmx4zAFyMKbA39JouysPRFqor.jpg',
          id: 1
        },
        {
          title: 'COVID-19 Challenge - Point of Care & Home Diagnostic Kit for COVID-19',
          text: 'The Public Health Agency of Canada (PHAC) and National Research Council (NRC) are seeking a solution that will diagnose individuals affected by COVID-19 within 3 days of the start of their symptoms using a sample, other than a nasopharyngeal swab, with a rapid s...',
          imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/kFAKrsgG91TV0ZoQsy3IhWZmI.jpg',
          id: 2
        },
        {
          title: 'Recycled Plastic Ceiling Tiles',
          text: 'View more details and submit the project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00090.html Problem statement The challenge we are facing is global and departmental. Globally, there is an accumulation of plastic with the equivalent of one tonne per person in exi...',
          imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/LGtxjGeIkje2QJm7GPK5s4So4.png',
          id: 3
        },
        {
            title: 'Diverting End of Life Vehicle Plastics from Landfills',
            text: 'View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00092.html Problem statement It is estimated that Canada generates between 300 and 400 kt per year of automotive...',
            imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/9sOWMH3o90jdBatFXqAlVA3pf.png',
            id: 4
          },
          {
            title: 'Sensing Technology for Monitoring Microplastics in Marine Environments',
            text: 'View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00091.html Problem statement Microplastics are plastic particles with characteristic length scales less than 5 mm...',
            imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/X594nZSBbXgvICcHUa4s1EjeN.png',
            id: 5
          },
          {
            title: 'E-Waste',
            text: 'View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00085.html Problem statement This challenge is highly relevant to SSC and ECCCs mandate and the federal gove...',
            imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/TAYbhXQ5Nbbc4Zfm2qhrc5QAi.png',
            id: 6
          },
          {
            title: 'Sustainable Alternatives to Plastic Packaging',
            text: 'View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00087.html Problem statement Canada has committed to a vision of zero plastic waste where all plastics stay in th...',
            imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/u5jflO7eH9zXK99FrOYYv1Fc8.png',
            id: 7
          },
          {
            title: 'Textiles and Microfibers',
            text: 'View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00086.html Problem statement Canada has committed to a vision of zero plastic waste where all plastics stay in th...',
            imageUrl: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/2OP2IlVjNsYXZ0mGlbzkIERls.png',
            id: 8
          },
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, text, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} text={text} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
