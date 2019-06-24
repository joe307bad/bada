import {IBorg} from './borg.interface'

export class Borg implements IBorg {
  backups(): string[] {
    return ['look', 'at', 'the', 'strings']
  }
}