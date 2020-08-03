Displays information about a given company.

```jsx
import React, { useState } from 'react';
import { Row, Button, CompanyCard } from '@moneypensionservice/directories';

const [locale, setLocale] = useState('en');

const firm = {
  firmName: 'Travelocity',
  getInTouch: {
    phone: '020123456',
    website: 'https://acme.org',
    email: 'support@acme.org'
  },
  moreInfo: {
    medicalCondition: 'Specialist cancer insurers. Underwitten individually by a medical professional',
    ageLimit: 'No upper age limit on Single Trip & Annual Multi-trip',
    destination: 'All destinations covered',
    durationLimit: 'Up to 6 months for a single continuous trip',
    treatmentStage: 'Cover available to patients on a waiting list, awaiting test results, terminal prognosis cases. Cover not available to patients going abroad for treatment'
  }
};

<>
<Row margin={{bottom: '20px'}}>
  <Button onClick={() => setLocale('en')}>English</Button>
  <Button onClick={() => setLocale('cy')}>Welsh</Button>
</Row>
<Row justify="center">
  <CompanyCard 
    sizes={{xs: 12, lg: 8}}
    data={firm}
    currentLng={locale} />
</Row>
</>
```
