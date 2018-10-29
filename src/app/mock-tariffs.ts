import  { TariffModel } from './tariff-model';

export const TARIFFS: Array<TariffModel> = [
    { id: 1, tarifName: 'Tariff1', donwloadSpeed: 12, uploadSpeed: 8, price: 123.45 },
    { id: 2, tarifName: 'Tariff2', donwloadSpeed: 14, uploadSpeed: 6, price: 124.45 },
    { id: 3, tarifName: 'Tariff3', donwloadSpeed: 16, uploadSpeed: 10, price: 125.45 },
    { id: 4, tarifName: 'Tariff4', donwloadSpeed: 10, uploadSpeed: 4, price: 126.45 },
    { id: 5, tarifName: 'Tariff5', donwloadSpeed: 8, uploadSpeed: 20, price: 127.45 }
];