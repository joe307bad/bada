import {Container} from 'inversify'
import 'reflect-metadata'

import {SERVICE_IDENTIFIER} from './constants'
import * as Domains from './domains'

let container = new Container()

container.bind<Domains.IBorg>(SERVICE_IDENTIFIER.BORG).to(Domains.Borg)