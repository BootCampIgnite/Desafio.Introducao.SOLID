import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userNotExists = this.usersRepository.findById(user_id);

    if (!userNotExists) {
      throw new Error("User Not Exists!");
    }
    const user = this.usersRepository.findById(user_id);

    return user;
  }
}

export { ShowUserProfileUseCase };
