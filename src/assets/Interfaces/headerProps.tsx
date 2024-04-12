

export interface IHeaderProps {
    setSort: (arg: string) => void;
    setIndependent: (arg: string) => void;
    setSortByRegion: (arg: string[]) => void;
    setSearch: (arg: string) => void;
    setSearchBy: (serachBy: string) => void;
}