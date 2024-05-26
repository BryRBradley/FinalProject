import { Community } from './community';
import { Location } from './location';
import { PostCategory} from './post-category';
import { User } from './user';
export class Post {
    id: number;
    user: User;
    community: Community | null;
    description: string;
    enabled: boolean;
    location: Location | null;
    postCategory: PostCategory;
    createdAt: string;
    updatedAt: string;
    
    constructor(
        id = 0,
        user = new User(),
        community = null,
        description = '',
        enabled = false,
        location = null,
        postCategory = new PostCategory(),
        createdAt = '',
        UpdatedAt = ''
    ) {
        this.id = id;
        this.user = user;
        this.community = community;
        this.description = description;
        this.enabled = enabled;
        this.location = location;
        this.postCategory = postCategory;
        this.createdAt = createdAt;
        this.updatedAt = UpdatedAt;
    }

}
