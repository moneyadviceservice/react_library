Displays information about a given company.

```jsx
import React, { useState } from 'react';
import { Row, Button, CompanyCard } from '@moneypensionservice/directories';

const [locale, setLocale] = useState('en');

const firm = {
  company: 'Acme Limited',
  online: {
    phone: '020000000',
    website: 'https://acme.org',
    email: 'support@acme.org',
    telephone_quote: true,
  },
  opening_times: {
    week_days: {
      opens: true,
      open_time: '9:00',
      close_time: '17:00',
    },
    saturdays: {
      opens: true,
      open_time: '10:00',
      close_time: '16:00',
    },
    sundays: {
      opens: true,
      open_time: '10:00',
      close_time: '13:00',
    }
  },
  overview: {
    coronavirus_cancellation_cover: true,
    coronavirus_medical_expense: true,
    cruise_cover: true,
    medical_conditions_cover:  {
      most_conditions_covered: false,
      specialises_in: 'cancer'
    },
    medical_equipment_cover: {
      cover_amount: 1000,
      offers_cover: true
    },
    medical_screening_company: 'verisik'
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
