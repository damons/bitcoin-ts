// tslint:disable:no-expression-statement no-magic-numbers
import { test } from 'ava';
import { hexToBin } from '../../../utils';
import { createAuthenticationVirtualMachine } from '../../virtual-machine';
import { serializeScript } from '../common/common';
import { commonTests } from '../common/common.spec.helper';
import { bitcoinCashInstructionSet } from './bitcoin-cash';

commonTests(() =>
  createAuthenticationVirtualMachine(bitcoinCashInstructionSet)
);

test('P2PKH Bitcoin Cash script', t => {
  // const vm = createAuthenticationVirtualMachine(bitcoinCashInstructionSet);
  // const vm = createBitcoinCashAuthenticationVM();

  const unlockingScript = hexToBin(
    '483045022100ab4c6d9ba51da83072615c33a9887b756478e6f9de381085f5183c97603fc6ff022029722188bd937f54c861582ca6fc685b8da2b40d05f06b368374d35e4af2b76401210376ea9e36a75d2ecf9c93a0be76885e36f822529db22acfdc761c9b5b4544f5c5'
  );
  const lockingScript = hexToBin(
    '76a91415d16c84669ab46059313bf0747e781f1d13936d88ac'
  );

  t.truthy(serializeScript(lockingScript, unlockingScript));

  // const program = { unlockingScript, lockingScript };

  // // completely evaluate until program is passed or failed (mutating state)
  // const result = vm.evaluate(program);
  // // completely evaluate, copying each state and returning an array of states
  // const trace = vm.debug(program);

  // // convert a program to an initial evaluation state
  // const state1 = vm.createState(program);

  // // copy an evaluation state, then progress by one step (mutating the copy), returning the copy
  // const state2 = vm.step(state1);

  // // possibly faster performance by mutating the original state rather than copying
  // // could just be a call to vm.stepMutate(state2), but that's nasty, so we still assign it
  // const state3 = vm.stepMutate(state2);
});
