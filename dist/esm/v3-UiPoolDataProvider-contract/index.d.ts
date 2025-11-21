import { providers, CallOverrides } from 'ethers';
import { ReservesHelperInput, UserReservesHelperInput } from '../index';
import { ReservesData, UserReserveData, ReservesDataHumanized, UserReserveDataHumanized, EModeData, EmodeDataHumanized } from './types';
export * from './types';
export interface UiPoolDataProviderContext {
    uiPoolDataProviderAddress: string;
    provider: providers.Provider;
    chainId: number;
}
export interface UiPoolDataProviderInterface {
    getReservesList: (args: ReservesHelperInput, overrides?: CallOverrides) => Promise<string[]>;
    getReservesData: (args: ReservesHelperInput, overrides?: CallOverrides) => Promise<ReservesData>;
    getUserReservesData: (args: UserReservesHelperInput, overrides?: CallOverrides) => Promise<UserReserveData>;
    getEModes: (args: ReservesHelperInput, overrides?: CallOverrides) => Promise<EModeData[]>;
    getEModesHumanized: (args: ReservesHelperInput, overrides?: CallOverrides) => Promise<EmodeDataHumanized[]>;
    getReservesHumanized: (args: ReservesHelperInput, overrides?: CallOverrides) => Promise<ReservesDataHumanized>;
    getUserReservesHumanized: (args: UserReservesHelperInput, overrides?: CallOverrides) => Promise<{
        userReserves: UserReserveDataHumanized[];
        userEmodeCategoryId: number;
    }>;
}
export declare class UiPoolDataProvider implements UiPoolDataProviderInterface {
    private readonly _contract;
    private readonly chainId;
    /**
     * Constructor
     * @param context The ui pool data provider context
     */
    constructor(context: UiPoolDataProviderContext);
    /**
     * Get the underlying asset address for each lending pool reserve
     */
    getReservesList({ lendingPoolAddressProvider }: ReservesHelperInput, overrides?: CallOverrides): Promise<string[]>;
    /**
     * Get data for each lending pool reserve
     */
    getReservesData({ lendingPoolAddressProvider }: ReservesHelperInput, overrides?: CallOverrides): Promise<ReservesData>;
    /**
     * Get data for each user reserve on the lending pool
     */
    getUserReservesData({ lendingPoolAddressProvider, user }: UserReservesHelperInput, overrides?: CallOverrides): Promise<UserReserveData>;
    getReservesHumanized({ lendingPoolAddressProvider }: ReservesHelperInput, overrides?: CallOverrides): Promise<ReservesDataHumanized>;
    getUserReservesHumanized({ lendingPoolAddressProvider, user }: UserReservesHelperInput, overrides?: CallOverrides): Promise<{
        userReserves: UserReserveDataHumanized[];
        userEmodeCategoryId: number;
    }>;
    getEModes({ lendingPoolAddressProvider }: ReservesHelperInput, overrides?: CallOverrides): Promise<EModeData[]>;
    getEModesHumanized({ lendingPoolAddressProvider }: ReservesHelperInput, overrides?: CallOverrides): Promise<EmodeDataHumanized[]>;
}
//# sourceMappingURL=index.d.ts.map