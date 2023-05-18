// match any function
declare type AnyFunction = (...args: any[]) => any;

// match any object
declare type AnyObject = Record<PropertyKey, any>;

// macth object by T
declare type TypedObject<T = any> = Record<PropertyKey, T>;

// match: Xxx
declare type AnyUpperCase = `${Uppercase<string>}${string}`;

// match: xxx-xxx-xxx
declare type AnyDateType = `${string}-${string}-${string}`;

// match: xxx:xxx:xxx
declare type AnyTimeType = `${string}:${string}:${string}`;

// match any class
declare type AnyClass = new (...args: any[]) => any;

// macth class by T
declare type TypedClass<T = any> = new (...args: any[]) => any;
