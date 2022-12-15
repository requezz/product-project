import { Currency } from 'entities/Currency/model/types/Currency';
import { Country } from 'entities/Country/model/types/Country';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
