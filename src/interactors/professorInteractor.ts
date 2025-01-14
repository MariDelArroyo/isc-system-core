import * as UserService from '../services/userService';
import * as UserRoleService from '../services/userRoleService';
import { buildLogger } from '../plugin/logger';
import createUserRequest from '../dtos/createUserRequest';
import { NotFoundError } from '../errors/notFoundError';

const logger = buildLogger('professorInteractor');

const professorRole = 2;

export const getProfessors = async () => {
  logger.debug('Fetching professors');
  const professors = await UserService.getProfessors();

  if (!professors) {
    logger.info('No professors found');
    throw new NotFoundError('There are no professors');
  }

  logger.info('Professors fetched successfully');
  return professors;
};

export const createProfessor = async (professorData: createUserRequest) => {
  try {
    const newProfessor = await UserService.createUser(professorData);

    if (!newProfessor) {
      throw new Error('Error creating the professor');
    }

    const { id } = newProfessor;
    const userRole = await UserRoleService.createUserRole(id, professorRole);
    if (!userRole) {
      throw new Error('Error creating the Professor Role');
    }
    return newProfessor;
  } catch (error) {
    console.error('Error in createProfessor interactor:', error);
    throw new Error('Error creating the professor');
  }
};
