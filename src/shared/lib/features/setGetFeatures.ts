import { FeatureFlags } from "@/shared/types/featureFlags";

// Фичи в ходе сессии не меняются, их необязательно делать реактивными
let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}
