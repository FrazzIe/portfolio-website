export type OpenGraphImagePage = {
    title: string;
    description: string;
    logo: 'home' | 'project' | 'cv' | string
}
export type OpenGraphImagePages = { [page: string]: OpenGraphImagePage }