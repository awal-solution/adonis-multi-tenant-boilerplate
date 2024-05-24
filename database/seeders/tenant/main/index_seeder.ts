import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }
  async run() {
    await this.runSeeder(await import('#database/seeders/tenant/user_seeder'))
    await this.runSeeder(await import('#database/seeders/tenant/profile_seeder'))
  }
}
