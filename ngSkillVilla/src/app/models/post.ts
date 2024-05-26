import { Location } from './location';
import { PostCategory} from './post-category';
import { User } from './user';
export class Post {
    id: number;
    user: User;
    community_id: number;
    description: string;
    enabled: boolean;
    location: Location;
    postCategory: PostCategory;
    createdAt: string;
    updatedAt: string;

    constructor(
        id = 0,
        user = new User(),
        community_id = 0,
        description = '',
        enabled = false,
        location = new Location(),
        postCategory = new PostCategory(),
        createdAt = '',
        UpdatedAt = ''
    ) {
        this.id = id;
        this.user = user;
        this.community_id = community_id;
        this.description = description;
        this.enabled = enabled;
        this.location = location;
        this.postCategory = postCategory
        this.createdAt = createdAt;
        this.updatedAt = UpdatedAt;
    }

}
