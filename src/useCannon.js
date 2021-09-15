import * as CANNON from 'cannon';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useRender } from 'react-three-fiber';

// キャノンワールドコンテキストプロバイダー
const context = React.createContext();
export function Provider({ children }) {
  // 物理学を設定する
  const [world] = useState(() => new CANNON.World());
  useEffect(() => {
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 10;
    world.gravity.set(0, 0, -25);
  }, [world]);

  //フレームごとにワールドステッパーを実行する
  useRender(() => world.step(1 / 60));
  //コンテキストを介してworldを配置する
  return <context.Provider value={world} children={children} />;
}

// 世界の物理ボディを維持するためのカスタムフック
export function useCannon({ ...props }, fn, deps = []) {
  const ref = useRef();
  // Get cannon world object
  const world = useContext(context);
  // キャノンワールドオブジェクトを取得する
  const [body] = useState(() => new CANNON.Body(props));
  useEffect(() => {
    // ユーザーが図形を追加できるように関数を呼び出す
    fn(body);
    // マウントでワールドにボディを追加
    world.addBody(body);
    // アンマウント時にボディを取り外します
    return () => world.removeBody(body);
  }, deps);

  useRender(() => {
    if (ref.current) {
      // cannonの物理を参照されたthreejsオブジェクトに転送します
      ref.current.position.copy(body.position);
      ref.current.quaternion.copy(body.quaternion);
    }
  });

  return ref;
}
