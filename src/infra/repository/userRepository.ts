import { Repository, EntityRepository } from 'typeorm'
import User from '@models/user'

@EntityRepository(User)
export default class userRepository extends Repository<User> {

}
