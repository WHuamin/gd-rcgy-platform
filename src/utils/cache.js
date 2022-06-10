import website from '@/constant/website.config'
const storeKey = `${process.env.NODE_ENV}-${website.storeKey}-`

export const sessionCache = {
  set (key, value) {
    if (!sessionStorage) {
      return
    }
    if (key != null && value != null) {
      sessionStorage.setItem(storeKey + key, value)
    }
  },
  get (key) {
    if (!sessionStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return sessionStorage.getItem(storeKey + key)
  },
  setJSON (key, jsonValue) {
    if (jsonValue != null) {
      this.set(storeKey + key, JSON.stringify(jsonValue))
    }
  },
  getJSON (key) {
    const value = this.get(storeKey + key)
    if (value != null) {
      return JSON.parse(value)
    }
  },
  remove (key) {
    sessionStorage.removeItem(storeKey + key)
  }
}

export const localCache = {
  set (key, value) {
    if (!localStorage) {
      return
    }
    if (key != null && value != null) {
      localStorage.setItem(storeKey + key, JSON.stringify(value))
    }
  },
  get (key) {
    if (!localStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return JSON.parse(localStorage.getItem(storeKey + key))
  },
  setJSON (key, jsonValue) {
    if (jsonValue != null) {
      this.set(storeKey + key, JSON.stringify(jsonValue))
    }
  },
  getJSON (key) {
    const value = this.get(storeKey + key)
    if (value != null) {
      return JSON.parse(value)
    }
  },
  remove (key) {
    localStorage.removeItem(storeKey + key)
  },
  clear () {
    localStorage.clear()
  }
}

export default {
  /**
   * 会话级缓存
   */
  session: sessionCache,
  /**
   * 本地缓存
   */
  local: localCache
}
