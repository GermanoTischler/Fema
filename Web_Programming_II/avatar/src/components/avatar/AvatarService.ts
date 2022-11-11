
export interface Avatar {
    id?: string;
    name: string;
    img: string
}

export class AvatarService {

    static list: Avatar[] = [];

    static salvar(avatar: Avatar) {
        if (avatar.id) {
            let index = AvatarService.list.findIndex(a => a.id == avatar.id);
            AvatarService.list[index].name = avatar.name
            AvatarService.list[index].img = avatar.img
        } else {
            avatar.id = Math.random().toString(36);
            AvatarService.list.push(avatar);
        }
    }
}