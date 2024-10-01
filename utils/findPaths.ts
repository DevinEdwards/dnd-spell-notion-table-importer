type ConditionFunc = (key: string, value: object | string) => boolean

export const findPath = (
  obj: any | undefined,
  condition: ConditionFunc
) => {
  const paths: string[] = []

  const keyExists = (
    key: number | string | undefined,
    value: Record<string, any> | string | undefined,
    currentPath: string[] = []
  ) => {
    if (!value || (typeof value !== 'object' && !Array.isArray(value))) {
      return
    }

    // Check for the condition in both string and number keys
    if (typeof key === 'string' || typeof key === 'number') {
      if (condition(key.toString(), value)) {
        paths.push(currentPath.join('.').replaceAll('.[', '['))
      }
    }

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        keyExists(i, value[i], [...currentPath, `[${i}]`])
      }
    } else {
      for (const k in value) {
        keyExists(k, value[k], [...currentPath, k])
      }
    }
  }

  keyExists(undefined, obj)

  return paths
}

export const findPaths = (arr: any[], condition: ConditionFunc) =>
  arr.map((obj) => findPath(obj, condition))

export default findPaths
