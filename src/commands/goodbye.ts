import {Command, flags} from '@oclif/command'
import {inject, injectable} from 'inversify'
import 'reflect-metadata';

import {IBorg, SERVICE_IDENTIFIER} from '../shared/services'

@injectable()
export default class Goodbye extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  private readonly _borg: IBorg

  public constructor(
    args: any,
    flags: any,
    @inject(SERVICE_IDENTIFIER.BORG) borg: IBorg,
  ) {
    super(args, flags)
    this._borg = borg
  }

  async run() {
    const {args, flags} = this.parse(Goodbye)

    const name = flags.name || 'world'
    const backups = this._borg.backups().toString()
    this.log(backups)
    this.log(`hello ${name} from /root/cli/tmp/examples/example-multi-ts/src/commands/goodbye.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }

}
