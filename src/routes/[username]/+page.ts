import type { PageLoad } from './$types';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [{ username: 'World' }, { username: 'Apside' }];
};


export const load: PageLoad = ({ params }: any) => {
	return {
        username: params.username,
    };
};