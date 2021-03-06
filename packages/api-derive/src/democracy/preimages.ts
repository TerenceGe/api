// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Bytes, Option } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveProposalImage } from '../types';

import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';
import { parseImage } from './util';

type PreImage = Option<ITuple<[Bytes, AccountId, Balance, BlockNumber]>>;

export function preimages (instanceId: string, api: ApiInterfaceRx): (hashes: Hash[]) => Observable<(DeriveProposalImage | undefined)[]> {
  return memo(instanceId, (hashes: Hash[]): Observable<(DeriveProposalImage | undefined)[]> =>
    api.query.democracy.preimages.multi<PreImage>(hashes).pipe(
      map((images): (DeriveProposalImage | undefined)[] =>
        images.map((imageOpt) => parseImage(api, imageOpt))
      )
    )
  );
}
