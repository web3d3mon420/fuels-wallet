import { toast } from '@fuel-ui/react';
import { VaultService } from '~/systems/Vault';
import { delay } from '../utils';
import { db } from '../utils/database';
import { Storage } from '../utils/storage';

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class CoreService {
  static async clear() {
    toast.success('Your wallet will be resetted');
    await delay(1500);
    await VaultService.clear();
    await db.clear();
    await Storage.clear();
  }
}
