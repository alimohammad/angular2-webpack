import { Injectable } from '@angular/core';

import { IProperty } from '../property/property';

@Injectable()
export class PropertyService {
    getAllPropertiesByOrganization(): IProperty[] {
        return [
            {
                id: 1,
                name: 'The Loft',
                addressLine1: 'Danau Kota',
                addressLine2: 'Jalan Genting Klang',
                city: 'Setapak',
                state: 'WP',
                country: 'MY',
                postCode: '40500',
                urlPrefix: 'loft',
                totalUnits: 400
            }
        ];
    }
}
