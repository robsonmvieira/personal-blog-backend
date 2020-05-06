import { container } from 'tsyringe'
import IHashAdapter from './HashAdapter/contract/IHashAdapter'
import HashAdapter from './HashAdapter/implamentation/HashAdapter'

container.registerSingleton<IHashAdapter>('HashAdapter', HashAdapter)
