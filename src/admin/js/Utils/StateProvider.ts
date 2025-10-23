import { create } from 'zustand';
import { getOptions, updateOptions } from '@/admin/js/Utils/Data';

/**
 * Helper: Generate a unique ID.
 */
export const uid = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * Define your state structure.
 */
interface StoreState {
    generalData: Record<string, any>;
    options: Record<string, any>;
    pluginList: any[];
    notice: Record<string, any>;

    // Actions
    setOptions: (theOption: Record<string, any>) => Promise<void>;
    setOption: (key: string, val: string | number | boolean | Record<string, any>) => Promise<void>;
    getTheOptions: () => Promise<void>;
    saveSettings: () => Promise<void>;
}

/**
 * Zustand store with full TypeScript typing.
 */
const useStore = create<StoreState>((set, get) => ({
    generalData: {},
    options: {},
    pluginList: [],
    notice: {},

    /**
     * Merge new options into existing state.
     */
    setOptions: async (theOption) => {
        set((state) => ({
            options: { ...state.options, ...theOption },
        }));
    },

    /**
     * Set a single option by key.
     */
    setOption: async (key, val) => {
        const { setOptions } = get();
        await setOptions({ [key]: val });
    },

    /**
     * Fetch options from the API.
     */
    getTheOptions: async () => {
        const theOption = await getOptions();
        console.log('theOption', theOption );
        set(() => ({ options: theOption }));
    },

    /**
     * Save settings and refresh from API.
     */
    saveSettings: async () => {
        const state = get();
        await updateOptions({ ...state.options });
        const theOption = await getOptions();
        set(() => ({ options: theOption }));
    },
}));

export default useStore;