
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model BookAppointment
 * 
 */
export type BookAppointment = $Result.DefaultSelection<Prisma.$BookAppointmentPayload>
/**
 * Model AppointmentSlot
 * 
 */
export type AppointmentSlot = $Result.DefaultSelection<Prisma.$AppointmentSlotPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Specialization
 * 
 */
export type Specialization = $Result.DefaultSelection<Prisma.$SpecializationPayload>
/**
 * Model DoctorProfile
 * 
 */
export type DoctorProfile = $Result.DefaultSelection<Prisma.$DoctorProfilePayload>
/**
 * Model DoctorSpecialization
 * 
 */
export type DoctorSpecialization = $Result.DefaultSelection<Prisma.$DoctorSpecializationPayload>
/**
 * Model DoctorRating
 * 
 */
export type DoctorRating = $Result.DefaultSelection<Prisma.$DoctorRatingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthProvider: {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  GITHUB: 'GITHUB',
  APPLE: 'APPLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]

}

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookAppointment`: Exposes CRUD operations for the **BookAppointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookAppointments
    * const bookAppointments = await prisma.bookAppointment.findMany()
    * ```
    */
  get bookAppointment(): Prisma.BookAppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentSlot`: Exposes CRUD operations for the **AppointmentSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentSlots
    * const appointmentSlots = await prisma.appointmentSlot.findMany()
    * ```
    */
  get appointmentSlot(): Prisma.AppointmentSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialization`: Exposes CRUD operations for the **Specialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specializations
    * const specializations = await prisma.specialization.findMany()
    * ```
    */
  get specialization(): Prisma.SpecializationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorProfile`: Exposes CRUD operations for the **DoctorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorProfiles
    * const doctorProfiles = await prisma.doctorProfile.findMany()
    * ```
    */
  get doctorProfile(): Prisma.DoctorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSpecialization`: Exposes CRUD operations for the **DoctorSpecialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecializations
    * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
    * ```
    */
  get doctorSpecialization(): Prisma.DoctorSpecializationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorRating`: Exposes CRUD operations for the **DoctorRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorRatings
    * const doctorRatings = await prisma.doctorRating.findMany()
    * ```
    */
  get doctorRating(): Prisma.DoctorRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Appointment: 'Appointment',
    BookAppointment: 'BookAppointment',
    AppointmentSlot: 'AppointmentSlot',
    Location: 'Location',
    Service: 'Service',
    Payment: 'Payment',
    Specialization: 'Specialization',
    DoctorProfile: 'DoctorProfile',
    DoctorSpecialization: 'DoctorSpecialization',
    DoctorRating: 'DoctorRating',
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appointment" | "bookAppointment" | "appointmentSlot" | "location" | "service" | "payment" | "specialization" | "doctorProfile" | "doctorSpecialization" | "doctorRating" | "user" | "role" | "userRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      BookAppointment: {
        payload: Prisma.$BookAppointmentPayload<ExtArgs>
        fields: Prisma.BookAppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookAppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookAppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload>
          }
          findFirst: {
            args: Prisma.BookAppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookAppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload>
          }
          findMany: {
            args: Prisma.BookAppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload>[]
          }
          create: {
            args: Prisma.BookAppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload>
          }
          createMany: {
            args: Prisma.BookAppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookAppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload>
          }
          update: {
            args: Prisma.BookAppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload>
          }
          deleteMany: {
            args: Prisma.BookAppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookAppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookAppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAppointmentPayload>
          }
          aggregate: {
            args: Prisma.BookAppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookAppointment>
          }
          groupBy: {
            args: Prisma.BookAppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookAppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookAppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<BookAppointmentCountAggregateOutputType> | number
          }
        }
      }
      AppointmentSlot: {
        payload: Prisma.$AppointmentSlotPayload<ExtArgs>
        fields: Prisma.AppointmentSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload>
          }
          findFirst: {
            args: Prisma.AppointmentSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload>
          }
          findMany: {
            args: Prisma.AppointmentSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload>[]
          }
          create: {
            args: Prisma.AppointmentSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload>
          }
          createMany: {
            args: Prisma.AppointmentSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload>
          }
          update: {
            args: Prisma.AppointmentSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotPayload>
          }
          aggregate: {
            args: Prisma.AppointmentSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentSlot>
          }
          groupBy: {
            args: Prisma.AppointmentSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentSlotCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentSlotCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Specialization: {
        payload: Prisma.$SpecializationPayload<ExtArgs>
        fields: Prisma.SpecializationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecializationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecializationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          findFirst: {
            args: Prisma.SpecializationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecializationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          findMany: {
            args: Prisma.SpecializationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>[]
          }
          create: {
            args: Prisma.SpecializationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          createMany: {
            args: Prisma.SpecializationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpecializationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          update: {
            args: Prisma.SpecializationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          deleteMany: {
            args: Prisma.SpecializationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecializationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpecializationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecializationPayload>
          }
          aggregate: {
            args: Prisma.SpecializationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialization>
          }
          groupBy: {
            args: Prisma.SpecializationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecializationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecializationCountArgs<ExtArgs>
            result: $Utils.Optional<SpecializationCountAggregateOutputType> | number
          }
        }
      }
      DoctorProfile: {
        payload: Prisma.$DoctorProfilePayload<ExtArgs>
        fields: Prisma.DoctorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findFirst: {
            args: Prisma.DoctorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findMany: {
            args: Prisma.DoctorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          create: {
            args: Prisma.DoctorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          createMany: {
            args: Prisma.DoctorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          update: {
            args: Prisma.DoctorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          deleteMany: {
            args: Prisma.DoctorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          aggregate: {
            args: Prisma.DoctorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorProfile>
          }
          groupBy: {
            args: Prisma.DoctorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileCountAggregateOutputType> | number
          }
        }
      }
      DoctorSpecialization: {
        payload: Prisma.$DoctorSpecializationPayload<ExtArgs>
        fields: Prisma.DoctorSpecializationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSpecializationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findFirst: {
            args: Prisma.DoctorSpecializationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findMany: {
            args: Prisma.DoctorSpecializationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          create: {
            args: Prisma.DoctorSpecializationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          createMany: {
            args: Prisma.DoctorSpecializationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorSpecializationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          update: {
            args: Prisma.DoctorSpecializationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSpecializationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSpecializationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorSpecializationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecializationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSpecialization>
          }
          groupBy: {
            args: Prisma.DoctorSpecializationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSpecializationCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationCountAggregateOutputType> | number
          }
        }
      }
      DoctorRating: {
        payload: Prisma.$DoctorRatingPayload<ExtArgs>
        fields: Prisma.DoctorRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          findFirst: {
            args: Prisma.DoctorRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          findMany: {
            args: Prisma.DoctorRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>[]
          }
          create: {
            args: Prisma.DoctorRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          createMany: {
            args: Prisma.DoctorRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          update: {
            args: Prisma.DoctorRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          deleteMany: {
            args: Prisma.DoctorRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          aggregate: {
            args: Prisma.DoctorRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorRating>
          }
          groupBy: {
            args: Prisma.DoctorRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorRatingCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorRatingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appointment?: AppointmentOmit
    bookAppointment?: BookAppointmentOmit
    appointmentSlot?: AppointmentSlotOmit
    location?: LocationOmit
    service?: ServiceOmit
    payment?: PaymentOmit
    specialization?: SpecializationOmit
    doctorProfile?: DoctorProfileOmit
    doctorSpecialization?: DoctorSpecializationOmit
    doctorRating?: DoctorRatingOmit
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    doctorRating: number
    bookAppointment: number
    payment: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorRating?: boolean | AppointmentCountOutputTypeCountDoctorRatingArgs
    bookAppointment?: boolean | AppointmentCountOutputTypeCountBookAppointmentArgs
    payment?: boolean | AppointmentCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountDoctorRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorRatingWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountBookAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAppointmentWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    appointment: number
    bookAppointment: number
    appointmentSlot: number
    service: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | LocationCountOutputTypeCountAppointmentArgs
    bookAppointment?: boolean | LocationCountOutputTypeCountBookAppointmentArgs
    appointmentSlot?: boolean | LocationCountOutputTypeCountAppointmentSlotArgs
    service?: boolean | LocationCountOutputTypeCountServiceArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountBookAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAppointmentWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAppointmentSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentSlotWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    appointment: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | ServiceCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type DoctorProfileCountOutputType
   */

  export type DoctorProfileCountOutputType = {
    appointment: number
    doctorSpecialization: number
    doctorRating: number
  }

  export type DoctorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | DoctorProfileCountOutputTypeCountAppointmentArgs
    doctorSpecialization?: boolean | DoctorProfileCountOutputTypeCountDoctorSpecializationArgs
    doctorRating?: boolean | DoctorProfileCountOutputTypeCountDoctorRatingArgs
  }

  // Custom InputTypes
  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfileCountOutputType
     */
    select?: DoctorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountDoctorSpecializationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecializationWhereInput
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountDoctorRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorRatingWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    appointments: number
    bookAppointments: number
    appointmentSlots: number
    locations: number
    services: number
    doctorProfiles: number
    doctorRatings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    bookAppointments?: boolean | UserCountOutputTypeCountBookAppointmentsArgs
    appointmentSlots?: boolean | UserCountOutputTypeCountAppointmentSlotsArgs
    locations?: boolean | UserCountOutputTypeCountLocationsArgs
    services?: boolean | UserCountOutputTypeCountServicesArgs
    doctorProfiles?: boolean | UserCountOutputTypeCountDoctorProfilesArgs
    doctorRatings?: boolean | UserCountOutputTypeCountDoctorRatingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentSlotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorRatingWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    doctorProfileId: string | null
    locationId: string | null
    serviceId: string | null
    appointmentDate: Date | null
    status: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    doctorProfileId: string | null
    locationId: string | null
    serviceId: string | null
    appointmentDate: Date | null
    status: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    userId: number
    doctorProfileId: number
    locationId: number
    serviceId: number
    appointmentDate: number
    status: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    userId?: true
    doctorProfileId?: true
    locationId?: true
    serviceId?: true
    appointmentDate?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    userId?: true
    doctorProfileId?: true
    locationId?: true
    serviceId?: true
    appointmentDate?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    userId?: true
    doctorProfileId?: true
    locationId?: true
    serviceId?: true
    appointmentDate?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    userId: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date
    status: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    doctorProfileId?: boolean
    locationId?: boolean
    serviceId?: boolean
    appointmentDate?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorProfile?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    doctorRating?: boolean | Appointment$doctorRatingArgs<ExtArgs>
    bookAppointment?: boolean | Appointment$bookAppointmentArgs<ExtArgs>
    payment?: boolean | Appointment$paymentArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>



  export type AppointmentSelectScalar = {
    id?: boolean
    userId?: boolean
    doctorProfileId?: boolean
    locationId?: boolean
    serviceId?: boolean
    appointmentDate?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "doctorProfileId" | "locationId" | "serviceId" | "appointmentDate" | "status" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorProfile?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    doctorRating?: boolean | Appointment$doctorRatingArgs<ExtArgs>
    bookAppointment?: boolean | Appointment$bookAppointmentArgs<ExtArgs>
    payment?: boolean | Appointment$paymentArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      doctorRating: Prisma.$DoctorRatingPayload<ExtArgs>[]
      bookAppointment: Prisma.$BookAppointmentPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      doctorProfileId: string
      locationId: string
      serviceId: string
      appointmentDate: Date
      status: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctorProfile<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctorRating<T extends Appointment$doctorRatingArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$doctorRatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookAppointment<T extends Appointment$bookAppointmentArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$bookAppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Appointment$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly userId: FieldRef<"Appointment", 'String'>
    readonly doctorProfileId: FieldRef<"Appointment", 'String'>
    readonly locationId: FieldRef<"Appointment", 'String'>
    readonly serviceId: FieldRef<"Appointment", 'String'>
    readonly appointmentDate: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly isActive: FieldRef<"Appointment", 'Boolean'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.doctorRating
   */
  export type Appointment$doctorRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    where?: DoctorRatingWhereInput
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    cursor?: DoctorRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * Appointment.bookAppointment
   */
  export type Appointment$bookAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    where?: BookAppointmentWhereInput
    orderBy?: BookAppointmentOrderByWithRelationInput | BookAppointmentOrderByWithRelationInput[]
    cursor?: BookAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAppointmentScalarFieldEnum | BookAppointmentScalarFieldEnum[]
  }

  /**
   * Appointment.payment
   */
  export type Appointment$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model BookAppointment
   */

  export type AggregateBookAppointment = {
    _count: BookAppointmentCountAggregateOutputType | null
    _min: BookAppointmentMinAggregateOutputType | null
    _max: BookAppointmentMaxAggregateOutputType | null
  }

  export type BookAppointmentMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    locationId: string | null
    appointmentId: string | null
    date: Date | null
    day: string | null
    startTime: string | null
    endTime: string | null
    status: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookAppointmentMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    locationId: string | null
    appointmentId: string | null
    date: Date | null
    day: string | null
    startTime: string | null
    endTime: string | null
    status: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookAppointmentCountAggregateOutputType = {
    id: number
    doctorId: number
    locationId: number
    appointmentId: number
    date: number
    day: number
    startTime: number
    endTime: number
    status: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookAppointmentMinAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    appointmentId?: true
    date?: true
    day?: true
    startTime?: true
    endTime?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookAppointmentMaxAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    appointmentId?: true
    date?: true
    day?: true
    startTime?: true
    endTime?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookAppointmentCountAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    appointmentId?: true
    date?: true
    day?: true
    startTime?: true
    endTime?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAppointment to aggregate.
     */
    where?: BookAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAppointments to fetch.
     */
    orderBy?: BookAppointmentOrderByWithRelationInput | BookAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookAppointments
    **/
    _count?: true | BookAppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookAppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookAppointmentMaxAggregateInputType
  }

  export type GetBookAppointmentAggregateType<T extends BookAppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateBookAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookAppointment[P]>
      : GetScalarType<T[P], AggregateBookAppointment[P]>
  }




  export type BookAppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAppointmentWhereInput
    orderBy?: BookAppointmentOrderByWithAggregationInput | BookAppointmentOrderByWithAggregationInput[]
    by: BookAppointmentScalarFieldEnum[] | BookAppointmentScalarFieldEnum
    having?: BookAppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookAppointmentCountAggregateInputType | true
    _min?: BookAppointmentMinAggregateInputType
    _max?: BookAppointmentMaxAggregateInputType
  }

  export type BookAppointmentGroupByOutputType = {
    id: string
    doctorId: string
    locationId: string
    appointmentId: string
    date: Date
    day: string | null
    startTime: string | null
    endTime: string | null
    status: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: BookAppointmentCountAggregateOutputType | null
    _min: BookAppointmentMinAggregateOutputType | null
    _max: BookAppointmentMaxAggregateOutputType | null
  }

  type GetBookAppointmentGroupByPayload<T extends BookAppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookAppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookAppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookAppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], BookAppointmentGroupByOutputType[P]>
        }
      >
    >


  export type BookAppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    locationId?: boolean
    appointmentId?: boolean
    date?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAppointment"]>



  export type BookAppointmentSelectScalar = {
    id?: boolean
    doctorId?: boolean
    locationId?: boolean
    appointmentId?: boolean
    date?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookAppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "locationId" | "appointmentId" | "date" | "day" | "startTime" | "endTime" | "status" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bookAppointment"]>
  export type BookAppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $BookAppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookAppointment"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      locationId: string
      appointmentId: string
      date: Date
      day: string | null
      startTime: string | null
      endTime: string | null
      status: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["bookAppointment"]>
    composites: {}
  }

  type BookAppointmentGetPayload<S extends boolean | null | undefined | BookAppointmentDefaultArgs> = $Result.GetResult<Prisma.$BookAppointmentPayload, S>

  type BookAppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookAppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookAppointmentCountAggregateInputType | true
    }

  export interface BookAppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookAppointment'], meta: { name: 'BookAppointment' } }
    /**
     * Find zero or one BookAppointment that matches the filter.
     * @param {BookAppointmentFindUniqueArgs} args - Arguments to find a BookAppointment
     * @example
     * // Get one BookAppointment
     * const bookAppointment = await prisma.bookAppointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookAppointmentFindUniqueArgs>(args: SelectSubset<T, BookAppointmentFindUniqueArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookAppointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookAppointmentFindUniqueOrThrowArgs} args - Arguments to find a BookAppointment
     * @example
     * // Get one BookAppointment
     * const bookAppointment = await prisma.bookAppointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookAppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, BookAppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAppointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAppointmentFindFirstArgs} args - Arguments to find a BookAppointment
     * @example
     * // Get one BookAppointment
     * const bookAppointment = await prisma.bookAppointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookAppointmentFindFirstArgs>(args?: SelectSubset<T, BookAppointmentFindFirstArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAppointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAppointmentFindFirstOrThrowArgs} args - Arguments to find a BookAppointment
     * @example
     * // Get one BookAppointment
     * const bookAppointment = await prisma.bookAppointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookAppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, BookAppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookAppointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookAppointments
     * const bookAppointments = await prisma.bookAppointment.findMany()
     * 
     * // Get first 10 BookAppointments
     * const bookAppointments = await prisma.bookAppointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookAppointmentWithIdOnly = await prisma.bookAppointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookAppointmentFindManyArgs>(args?: SelectSubset<T, BookAppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookAppointment.
     * @param {BookAppointmentCreateArgs} args - Arguments to create a BookAppointment.
     * @example
     * // Create one BookAppointment
     * const BookAppointment = await prisma.bookAppointment.create({
     *   data: {
     *     // ... data to create a BookAppointment
     *   }
     * })
     * 
     */
    create<T extends BookAppointmentCreateArgs>(args: SelectSubset<T, BookAppointmentCreateArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookAppointments.
     * @param {BookAppointmentCreateManyArgs} args - Arguments to create many BookAppointments.
     * @example
     * // Create many BookAppointments
     * const bookAppointment = await prisma.bookAppointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookAppointmentCreateManyArgs>(args?: SelectSubset<T, BookAppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookAppointment.
     * @param {BookAppointmentDeleteArgs} args - Arguments to delete one BookAppointment.
     * @example
     * // Delete one BookAppointment
     * const BookAppointment = await prisma.bookAppointment.delete({
     *   where: {
     *     // ... filter to delete one BookAppointment
     *   }
     * })
     * 
     */
    delete<T extends BookAppointmentDeleteArgs>(args: SelectSubset<T, BookAppointmentDeleteArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookAppointment.
     * @param {BookAppointmentUpdateArgs} args - Arguments to update one BookAppointment.
     * @example
     * // Update one BookAppointment
     * const bookAppointment = await prisma.bookAppointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookAppointmentUpdateArgs>(args: SelectSubset<T, BookAppointmentUpdateArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookAppointments.
     * @param {BookAppointmentDeleteManyArgs} args - Arguments to filter BookAppointments to delete.
     * @example
     * // Delete a few BookAppointments
     * const { count } = await prisma.bookAppointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookAppointmentDeleteManyArgs>(args?: SelectSubset<T, BookAppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookAppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookAppointments
     * const bookAppointment = await prisma.bookAppointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookAppointmentUpdateManyArgs>(args: SelectSubset<T, BookAppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookAppointment.
     * @param {BookAppointmentUpsertArgs} args - Arguments to update or create a BookAppointment.
     * @example
     * // Update or create a BookAppointment
     * const bookAppointment = await prisma.bookAppointment.upsert({
     *   create: {
     *     // ... data to create a BookAppointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookAppointment we want to update
     *   }
     * })
     */
    upsert<T extends BookAppointmentUpsertArgs>(args: SelectSubset<T, BookAppointmentUpsertArgs<ExtArgs>>): Prisma__BookAppointmentClient<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookAppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAppointmentCountArgs} args - Arguments to filter BookAppointments to count.
     * @example
     * // Count the number of BookAppointments
     * const count = await prisma.bookAppointment.count({
     *   where: {
     *     // ... the filter for the BookAppointments we want to count
     *   }
     * })
    **/
    count<T extends BookAppointmentCountArgs>(
      args?: Subset<T, BookAppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookAppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookAppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAppointmentAggregateArgs>(args: Subset<T, BookAppointmentAggregateArgs>): Prisma.PrismaPromise<GetBookAppointmentAggregateType<T>>

    /**
     * Group by BookAppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookAppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookAppointmentGroupByArgs['orderBy'] }
        : { orderBy?: BookAppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookAppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookAppointment model
   */
  readonly fields: BookAppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookAppointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookAppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookAppointment model
   */
  interface BookAppointmentFieldRefs {
    readonly id: FieldRef<"BookAppointment", 'String'>
    readonly doctorId: FieldRef<"BookAppointment", 'String'>
    readonly locationId: FieldRef<"BookAppointment", 'String'>
    readonly appointmentId: FieldRef<"BookAppointment", 'String'>
    readonly date: FieldRef<"BookAppointment", 'DateTime'>
    readonly day: FieldRef<"BookAppointment", 'String'>
    readonly startTime: FieldRef<"BookAppointment", 'String'>
    readonly endTime: FieldRef<"BookAppointment", 'String'>
    readonly status: FieldRef<"BookAppointment", 'String'>
    readonly isActive: FieldRef<"BookAppointment", 'Boolean'>
    readonly createdAt: FieldRef<"BookAppointment", 'DateTime'>
    readonly updatedAt: FieldRef<"BookAppointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookAppointment findUnique
   */
  export type BookAppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which BookAppointment to fetch.
     */
    where: BookAppointmentWhereUniqueInput
  }

  /**
   * BookAppointment findUniqueOrThrow
   */
  export type BookAppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which BookAppointment to fetch.
     */
    where: BookAppointmentWhereUniqueInput
  }

  /**
   * BookAppointment findFirst
   */
  export type BookAppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which BookAppointment to fetch.
     */
    where?: BookAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAppointments to fetch.
     */
    orderBy?: BookAppointmentOrderByWithRelationInput | BookAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAppointments.
     */
    cursor?: BookAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAppointments.
     */
    distinct?: BookAppointmentScalarFieldEnum | BookAppointmentScalarFieldEnum[]
  }

  /**
   * BookAppointment findFirstOrThrow
   */
  export type BookAppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which BookAppointment to fetch.
     */
    where?: BookAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAppointments to fetch.
     */
    orderBy?: BookAppointmentOrderByWithRelationInput | BookAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAppointments.
     */
    cursor?: BookAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAppointments.
     */
    distinct?: BookAppointmentScalarFieldEnum | BookAppointmentScalarFieldEnum[]
  }

  /**
   * BookAppointment findMany
   */
  export type BookAppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which BookAppointments to fetch.
     */
    where?: BookAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAppointments to fetch.
     */
    orderBy?: BookAppointmentOrderByWithRelationInput | BookAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookAppointments.
     */
    cursor?: BookAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAppointments.
     */
    skip?: number
    distinct?: BookAppointmentScalarFieldEnum | BookAppointmentScalarFieldEnum[]
  }

  /**
   * BookAppointment create
   */
  export type BookAppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a BookAppointment.
     */
    data: XOR<BookAppointmentCreateInput, BookAppointmentUncheckedCreateInput>
  }

  /**
   * BookAppointment createMany
   */
  export type BookAppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookAppointments.
     */
    data: BookAppointmentCreateManyInput | BookAppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookAppointment update
   */
  export type BookAppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a BookAppointment.
     */
    data: XOR<BookAppointmentUpdateInput, BookAppointmentUncheckedUpdateInput>
    /**
     * Choose, which BookAppointment to update.
     */
    where: BookAppointmentWhereUniqueInput
  }

  /**
   * BookAppointment updateMany
   */
  export type BookAppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookAppointments.
     */
    data: XOR<BookAppointmentUpdateManyMutationInput, BookAppointmentUncheckedUpdateManyInput>
    /**
     * Filter which BookAppointments to update
     */
    where?: BookAppointmentWhereInput
    /**
     * Limit how many BookAppointments to update.
     */
    limit?: number
  }

  /**
   * BookAppointment upsert
   */
  export type BookAppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the BookAppointment to update in case it exists.
     */
    where: BookAppointmentWhereUniqueInput
    /**
     * In case the BookAppointment found by the `where` argument doesn't exist, create a new BookAppointment with this data.
     */
    create: XOR<BookAppointmentCreateInput, BookAppointmentUncheckedCreateInput>
    /**
     * In case the BookAppointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookAppointmentUpdateInput, BookAppointmentUncheckedUpdateInput>
  }

  /**
   * BookAppointment delete
   */
  export type BookAppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    /**
     * Filter which BookAppointment to delete.
     */
    where: BookAppointmentWhereUniqueInput
  }

  /**
   * BookAppointment deleteMany
   */
  export type BookAppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAppointments to delete
     */
    where?: BookAppointmentWhereInput
    /**
     * Limit how many BookAppointments to delete.
     */
    limit?: number
  }

  /**
   * BookAppointment without action
   */
  export type BookAppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentSlot
   */

  export type AggregateAppointmentSlot = {
    _count: AppointmentSlotCountAggregateOutputType | null
    _avg: AppointmentSlotAvgAggregateOutputType | null
    _sum: AppointmentSlotSumAggregateOutputType | null
    _min: AppointmentSlotMinAggregateOutputType | null
    _max: AppointmentSlotMaxAggregateOutputType | null
  }

  export type AppointmentSlotAvgAggregateOutputType = {
    appointmentSlotDuration: number | null
    totalAppointmentSlots: number | null
  }

  export type AppointmentSlotSumAggregateOutputType = {
    appointmentSlotDuration: number | null
    totalAppointmentSlots: number | null
  }

  export type AppointmentSlotMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    locationId: string | null
    day: string | null
    startTime: string | null
    endTime: string | null
    appointmentSlotDuration: number | null
    totalAppointmentSlots: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentSlotMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    locationId: string | null
    day: string | null
    startTime: string | null
    endTime: string | null
    appointmentSlotDuration: number | null
    totalAppointmentSlots: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentSlotCountAggregateOutputType = {
    id: number
    doctorId: number
    locationId: number
    day: number
    startTime: number
    endTime: number
    appointmentSlotDuration: number
    totalAppointmentSlots: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentSlotAvgAggregateInputType = {
    appointmentSlotDuration?: true
    totalAppointmentSlots?: true
  }

  export type AppointmentSlotSumAggregateInputType = {
    appointmentSlotDuration?: true
    totalAppointmentSlots?: true
  }

  export type AppointmentSlotMinAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    day?: true
    startTime?: true
    endTime?: true
    appointmentSlotDuration?: true
    totalAppointmentSlots?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentSlotMaxAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    day?: true
    startTime?: true
    endTime?: true
    appointmentSlotDuration?: true
    totalAppointmentSlots?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentSlotCountAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    day?: true
    startTime?: true
    endTime?: true
    appointmentSlotDuration?: true
    totalAppointmentSlots?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentSlot to aggregate.
     */
    where?: AppointmentSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlots to fetch.
     */
    orderBy?: AppointmentSlotOrderByWithRelationInput | AppointmentSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentSlots
    **/
    _count?: true | AppointmentSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentSlotMaxAggregateInputType
  }

  export type GetAppointmentSlotAggregateType<T extends AppointmentSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentSlot[P]>
      : GetScalarType<T[P], AggregateAppointmentSlot[P]>
  }




  export type AppointmentSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentSlotWhereInput
    orderBy?: AppointmentSlotOrderByWithAggregationInput | AppointmentSlotOrderByWithAggregationInput[]
    by: AppointmentSlotScalarFieldEnum[] | AppointmentSlotScalarFieldEnum
    having?: AppointmentSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentSlotCountAggregateInputType | true
    _avg?: AppointmentSlotAvgAggregateInputType
    _sum?: AppointmentSlotSumAggregateInputType
    _min?: AppointmentSlotMinAggregateInputType
    _max?: AppointmentSlotMaxAggregateInputType
  }

  export type AppointmentSlotGroupByOutputType = {
    id: string
    doctorId: string
    locationId: string
    day: string | null
    startTime: string | null
    endTime: string | null
    appointmentSlotDuration: number | null
    totalAppointmentSlots: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: AppointmentSlotCountAggregateOutputType | null
    _avg: AppointmentSlotAvgAggregateOutputType | null
    _sum: AppointmentSlotSumAggregateOutputType | null
    _min: AppointmentSlotMinAggregateOutputType | null
    _max: AppointmentSlotMaxAggregateOutputType | null
  }

  type GetAppointmentSlotGroupByPayload<T extends AppointmentSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentSlotGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentSlotGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    locationId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    appointmentSlotDuration?: boolean
    totalAppointmentSlots?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentSlot"]>



  export type AppointmentSlotSelectScalar = {
    id?: boolean
    doctorId?: boolean
    locationId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    appointmentSlotDuration?: boolean
    totalAppointmentSlots?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "locationId" | "day" | "startTime" | "endTime" | "appointmentSlotDuration" | "totalAppointmentSlots" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["appointmentSlot"]>
  export type AppointmentSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $AppointmentSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentSlot"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      locationId: string
      day: string | null
      startTime: string | null
      endTime: string | null
      appointmentSlotDuration: number | null
      totalAppointmentSlots: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["appointmentSlot"]>
    composites: {}
  }

  type AppointmentSlotGetPayload<S extends boolean | null | undefined | AppointmentSlotDefaultArgs> = $Result.GetResult<Prisma.$AppointmentSlotPayload, S>

  type AppointmentSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentSlotCountAggregateInputType | true
    }

  export interface AppointmentSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentSlot'], meta: { name: 'AppointmentSlot' } }
    /**
     * Find zero or one AppointmentSlot that matches the filter.
     * @param {AppointmentSlotFindUniqueArgs} args - Arguments to find a AppointmentSlot
     * @example
     * // Get one AppointmentSlot
     * const appointmentSlot = await prisma.appointmentSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentSlotFindUniqueArgs>(args: SelectSubset<T, AppointmentSlotFindUniqueArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentSlotFindUniqueOrThrowArgs} args - Arguments to find a AppointmentSlot
     * @example
     * // Get one AppointmentSlot
     * const appointmentSlot = await prisma.appointmentSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotFindFirstArgs} args - Arguments to find a AppointmentSlot
     * @example
     * // Get one AppointmentSlot
     * const appointmentSlot = await prisma.appointmentSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentSlotFindFirstArgs>(args?: SelectSubset<T, AppointmentSlotFindFirstArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotFindFirstOrThrowArgs} args - Arguments to find a AppointmentSlot
     * @example
     * // Get one AppointmentSlot
     * const appointmentSlot = await prisma.appointmentSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentSlots
     * const appointmentSlots = await prisma.appointmentSlot.findMany()
     * 
     * // Get first 10 AppointmentSlots
     * const appointmentSlots = await prisma.appointmentSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentSlotWithIdOnly = await prisma.appointmentSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentSlotFindManyArgs>(args?: SelectSubset<T, AppointmentSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentSlot.
     * @param {AppointmentSlotCreateArgs} args - Arguments to create a AppointmentSlot.
     * @example
     * // Create one AppointmentSlot
     * const AppointmentSlot = await prisma.appointmentSlot.create({
     *   data: {
     *     // ... data to create a AppointmentSlot
     *   }
     * })
     * 
     */
    create<T extends AppointmentSlotCreateArgs>(args: SelectSubset<T, AppointmentSlotCreateArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentSlots.
     * @param {AppointmentSlotCreateManyArgs} args - Arguments to create many AppointmentSlots.
     * @example
     * // Create many AppointmentSlots
     * const appointmentSlot = await prisma.appointmentSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentSlotCreateManyArgs>(args?: SelectSubset<T, AppointmentSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppointmentSlot.
     * @param {AppointmentSlotDeleteArgs} args - Arguments to delete one AppointmentSlot.
     * @example
     * // Delete one AppointmentSlot
     * const AppointmentSlot = await prisma.appointmentSlot.delete({
     *   where: {
     *     // ... filter to delete one AppointmentSlot
     *   }
     * })
     * 
     */
    delete<T extends AppointmentSlotDeleteArgs>(args: SelectSubset<T, AppointmentSlotDeleteArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentSlot.
     * @param {AppointmentSlotUpdateArgs} args - Arguments to update one AppointmentSlot.
     * @example
     * // Update one AppointmentSlot
     * const appointmentSlot = await prisma.appointmentSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentSlotUpdateArgs>(args: SelectSubset<T, AppointmentSlotUpdateArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentSlots.
     * @param {AppointmentSlotDeleteManyArgs} args - Arguments to filter AppointmentSlots to delete.
     * @example
     * // Delete a few AppointmentSlots
     * const { count } = await prisma.appointmentSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentSlotDeleteManyArgs>(args?: SelectSubset<T, AppointmentSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentSlots
     * const appointmentSlot = await prisma.appointmentSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentSlotUpdateManyArgs>(args: SelectSubset<T, AppointmentSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppointmentSlot.
     * @param {AppointmentSlotUpsertArgs} args - Arguments to update or create a AppointmentSlot.
     * @example
     * // Update or create a AppointmentSlot
     * const appointmentSlot = await prisma.appointmentSlot.upsert({
     *   create: {
     *     // ... data to create a AppointmentSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentSlot we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentSlotUpsertArgs>(args: SelectSubset<T, AppointmentSlotUpsertArgs<ExtArgs>>): Prisma__AppointmentSlotClient<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotCountArgs} args - Arguments to filter AppointmentSlots to count.
     * @example
     * // Count the number of AppointmentSlots
     * const count = await prisma.appointmentSlot.count({
     *   where: {
     *     // ... the filter for the AppointmentSlots we want to count
     *   }
     * })
    **/
    count<T extends AppointmentSlotCountArgs>(
      args?: Subset<T, AppointmentSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentSlotAggregateArgs>(args: Subset<T, AppointmentSlotAggregateArgs>): Prisma.PrismaPromise<GetAppointmentSlotAggregateType<T>>

    /**
     * Group by AppointmentSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentSlotGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentSlot model
   */
  readonly fields: AppointmentSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppointmentSlot model
   */
  interface AppointmentSlotFieldRefs {
    readonly id: FieldRef<"AppointmentSlot", 'String'>
    readonly doctorId: FieldRef<"AppointmentSlot", 'String'>
    readonly locationId: FieldRef<"AppointmentSlot", 'String'>
    readonly day: FieldRef<"AppointmentSlot", 'String'>
    readonly startTime: FieldRef<"AppointmentSlot", 'String'>
    readonly endTime: FieldRef<"AppointmentSlot", 'String'>
    readonly appointmentSlotDuration: FieldRef<"AppointmentSlot", 'Int'>
    readonly totalAppointmentSlots: FieldRef<"AppointmentSlot", 'Int'>
    readonly isActive: FieldRef<"AppointmentSlot", 'Boolean'>
    readonly createdAt: FieldRef<"AppointmentSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"AppointmentSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentSlot findUnique
   */
  export type AppointmentSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlot to fetch.
     */
    where: AppointmentSlotWhereUniqueInput
  }

  /**
   * AppointmentSlot findUniqueOrThrow
   */
  export type AppointmentSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlot to fetch.
     */
    where: AppointmentSlotWhereUniqueInput
  }

  /**
   * AppointmentSlot findFirst
   */
  export type AppointmentSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlot to fetch.
     */
    where?: AppointmentSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlots to fetch.
     */
    orderBy?: AppointmentSlotOrderByWithRelationInput | AppointmentSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentSlots.
     */
    cursor?: AppointmentSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentSlots.
     */
    distinct?: AppointmentSlotScalarFieldEnum | AppointmentSlotScalarFieldEnum[]
  }

  /**
   * AppointmentSlot findFirstOrThrow
   */
  export type AppointmentSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlot to fetch.
     */
    where?: AppointmentSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlots to fetch.
     */
    orderBy?: AppointmentSlotOrderByWithRelationInput | AppointmentSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentSlots.
     */
    cursor?: AppointmentSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentSlots.
     */
    distinct?: AppointmentSlotScalarFieldEnum | AppointmentSlotScalarFieldEnum[]
  }

  /**
   * AppointmentSlot findMany
   */
  export type AppointmentSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlots to fetch.
     */
    where?: AppointmentSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlots to fetch.
     */
    orderBy?: AppointmentSlotOrderByWithRelationInput | AppointmentSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentSlots.
     */
    cursor?: AppointmentSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlots.
     */
    skip?: number
    distinct?: AppointmentSlotScalarFieldEnum | AppointmentSlotScalarFieldEnum[]
  }

  /**
   * AppointmentSlot create
   */
  export type AppointmentSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentSlot.
     */
    data: XOR<AppointmentSlotCreateInput, AppointmentSlotUncheckedCreateInput>
  }

  /**
   * AppointmentSlot createMany
   */
  export type AppointmentSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentSlots.
     */
    data: AppointmentSlotCreateManyInput | AppointmentSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentSlot update
   */
  export type AppointmentSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentSlot.
     */
    data: XOR<AppointmentSlotUpdateInput, AppointmentSlotUncheckedUpdateInput>
    /**
     * Choose, which AppointmentSlot to update.
     */
    where: AppointmentSlotWhereUniqueInput
  }

  /**
   * AppointmentSlot updateMany
   */
  export type AppointmentSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentSlots.
     */
    data: XOR<AppointmentSlotUpdateManyMutationInput, AppointmentSlotUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentSlots to update
     */
    where?: AppointmentSlotWhereInput
    /**
     * Limit how many AppointmentSlots to update.
     */
    limit?: number
  }

  /**
   * AppointmentSlot upsert
   */
  export type AppointmentSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentSlot to update in case it exists.
     */
    where: AppointmentSlotWhereUniqueInput
    /**
     * In case the AppointmentSlot found by the `where` argument doesn't exist, create a new AppointmentSlot with this data.
     */
    create: XOR<AppointmentSlotCreateInput, AppointmentSlotUncheckedCreateInput>
    /**
     * In case the AppointmentSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentSlotUpdateInput, AppointmentSlotUncheckedUpdateInput>
  }

  /**
   * AppointmentSlot delete
   */
  export type AppointmentSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    /**
     * Filter which AppointmentSlot to delete.
     */
    where: AppointmentSlotWhereUniqueInput
  }

  /**
   * AppointmentSlot deleteMany
   */
  export type AppointmentSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentSlots to delete
     */
    where?: AppointmentSlotWhereInput
    /**
     * Limit how many AppointmentSlots to delete.
     */
    limit?: number
  }

  /**
   * AppointmentSlot without action
   */
  export type AppointmentSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    phone: string | null
    isLocationVerified: boolean | null
    verifiedBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    phone: string | null
    isLocationVerified: boolean | null
    verifiedBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    doctorId: number
    name: number
    address: number
    city: number
    state: number
    country: number
    zipCode: number
    phone: number
    isLocationVerified: number
    verifiedBy: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    doctorId?: true
    name?: true
    address?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    phone?: true
    isLocationVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    doctorId?: true
    name?: true
    address?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    phone?: true
    isLocationVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    doctorId?: true
    name?: true
    address?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    phone?: true
    isLocationVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    doctorId: string
    name: string
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    phone: string | null
    isLocationVerified: boolean
    verifiedBy: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    phone?: boolean
    isLocationVerified?: boolean
    verifiedBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Location$appointmentArgs<ExtArgs>
    bookAppointment?: boolean | Location$bookAppointmentArgs<ExtArgs>
    appointmentSlot?: boolean | Location$appointmentSlotArgs<ExtArgs>
    service?: boolean | Location$serviceArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    id?: boolean
    doctorId?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    phone?: boolean
    isLocationVerified?: boolean
    verifiedBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "name" | "address" | "city" | "state" | "country" | "zipCode" | "phone" | "isLocationVerified" | "verifiedBy" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Location$appointmentArgs<ExtArgs>
    bookAppointment?: boolean | Location$bookAppointmentArgs<ExtArgs>
    appointmentSlot?: boolean | Location$appointmentSlotArgs<ExtArgs>
    service?: boolean | Location$serviceArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      bookAppointment: Prisma.$BookAppointmentPayload<ExtArgs>[]
      appointmentSlot: Prisma.$AppointmentSlotPayload<ExtArgs>[]
      service: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      name: string
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      zipCode: string | null
      phone: string | null
      isLocationVerified: boolean
      verifiedBy: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends Location$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Location$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookAppointment<T extends Location$bookAppointmentArgs<ExtArgs> = {}>(args?: Subset<T, Location$bookAppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentSlot<T extends Location$appointmentSlotArgs<ExtArgs> = {}>(args?: Subset<T, Location$appointmentSlotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    service<T extends Location$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Location$serviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly doctorId: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly zipCode: FieldRef<"Location", 'String'>
    readonly phone: FieldRef<"Location", 'String'>
    readonly isLocationVerified: FieldRef<"Location", 'Boolean'>
    readonly verifiedBy: FieldRef<"Location", 'String'>
    readonly isActive: FieldRef<"Location", 'Boolean'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.appointment
   */
  export type Location$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Location.bookAppointment
   */
  export type Location$bookAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    where?: BookAppointmentWhereInput
    orderBy?: BookAppointmentOrderByWithRelationInput | BookAppointmentOrderByWithRelationInput[]
    cursor?: BookAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAppointmentScalarFieldEnum | BookAppointmentScalarFieldEnum[]
  }

  /**
   * Location.appointmentSlot
   */
  export type Location$appointmentSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    where?: AppointmentSlotWhereInput
    orderBy?: AppointmentSlotOrderByWithRelationInput | AppointmentSlotOrderByWithRelationInput[]
    cursor?: AppointmentSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentSlotScalarFieldEnum | AppointmentSlotScalarFieldEnum[]
  }

  /**
   * Location.service
   */
  export type Location$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ServiceSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    locationId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    locationId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    doctorId: number
    locationId: number
    name: number
    description: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    doctorId?: true
    locationId?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    doctorId: string
    locationId: string
    name: string
    description: string | null
    price: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    locationId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointment?: boolean | Service$appointmentArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    doctorId?: boolean
    locationId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "locationId" | "name" | "description" | "price" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointment?: boolean | Service$appointmentArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      locationId: string
      name: string
      description: string | null
      price: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends Service$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Service$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly doctorId: FieldRef<"Service", 'String'>
    readonly locationId: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Decimal'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.appointment
   */
  export type Service$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    transactionId: string | null
    amount: Decimal | null
    status: string | null
    paymentMethod: string | null
    currencyCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    transactionId: string | null
    amount: Decimal | null
    status: string | null
    paymentMethod: string | null
    currencyCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    appointmentId: number
    transactionId: number
    amount: number
    status: number
    paymentMethod: number
    currencyCode: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    appointmentId?: true
    transactionId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    currencyCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    transactionId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    currencyCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    appointmentId?: true
    transactionId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    currencyCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    appointmentId: string
    transactionId: string | null
    amount: Decimal
    status: string
    paymentMethod: string
    currencyCode: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    transactionId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    currencyCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    transactionId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    currencyCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "transactionId" | "amount" | "status" | "paymentMethod" | "currencyCode" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      transactionId: string | null
      amount: Prisma.Decimal
      status: string
      paymentMethod: string
      currencyCode: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly appointmentId: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly currencyCode: FieldRef<"Payment", 'String'>
    readonly isActive: FieldRef<"Payment", 'Boolean'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Specialization
   */

  export type AggregateSpecialization = {
    _count: SpecializationCountAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  export type SpecializationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecializationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecializationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecializationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecializationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecializationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecializationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialization to aggregate.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specializations
    **/
    _count?: true | SpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecializationMaxAggregateInputType
  }

  export type GetSpecializationAggregateType<T extends SpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialization[P]>
      : GetScalarType<T[P], AggregateSpecialization[P]>
  }




  export type SpecializationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecializationWhereInput
    orderBy?: SpecializationOrderByWithAggregationInput | SpecializationOrderByWithAggregationInput[]
    by: SpecializationScalarFieldEnum[] | SpecializationScalarFieldEnum
    having?: SpecializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecializationCountAggregateInputType | true
    _min?: SpecializationMinAggregateInputType
    _max?: SpecializationMaxAggregateInputType
  }

  export type SpecializationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SpecializationCountAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  type GetSpecializationGroupByPayload<T extends SpecializationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
        }
      >
    >


  export type SpecializationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialization"]>



  export type SpecializationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecializationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["specialization"]>

  export type $SpecializationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialization"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialization"]>
    composites: {}
  }

  type SpecializationGetPayload<S extends boolean | null | undefined | SpecializationDefaultArgs> = $Result.GetResult<Prisma.$SpecializationPayload, S>

  type SpecializationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecializationCountAggregateInputType | true
    }

  export interface SpecializationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialization'], meta: { name: 'Specialization' } }
    /**
     * Find zero or one Specialization that matches the filter.
     * @param {SpecializationFindUniqueArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecializationFindUniqueArgs>(args: SelectSubset<T, SpecializationFindUniqueArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecializationFindUniqueOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecializationFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindFirstArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecializationFindFirstArgs>(args?: SelectSubset<T, SpecializationFindFirstArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindFirstOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecializationFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specializations
     * const specializations = await prisma.specialization.findMany()
     * 
     * // Get first 10 Specializations
     * const specializations = await prisma.specialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specializationWithIdOnly = await prisma.specialization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecializationFindManyArgs>(args?: SelectSubset<T, SpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialization.
     * @param {SpecializationCreateArgs} args - Arguments to create a Specialization.
     * @example
     * // Create one Specialization
     * const Specialization = await prisma.specialization.create({
     *   data: {
     *     // ... data to create a Specialization
     *   }
     * })
     * 
     */
    create<T extends SpecializationCreateArgs>(args: SelectSubset<T, SpecializationCreateArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specializations.
     * @param {SpecializationCreateManyArgs} args - Arguments to create many Specializations.
     * @example
     * // Create many Specializations
     * const specialization = await prisma.specialization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecializationCreateManyArgs>(args?: SelectSubset<T, SpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Specialization.
     * @param {SpecializationDeleteArgs} args - Arguments to delete one Specialization.
     * @example
     * // Delete one Specialization
     * const Specialization = await prisma.specialization.delete({
     *   where: {
     *     // ... filter to delete one Specialization
     *   }
     * })
     * 
     */
    delete<T extends SpecializationDeleteArgs>(args: SelectSubset<T, SpecializationDeleteArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialization.
     * @param {SpecializationUpdateArgs} args - Arguments to update one Specialization.
     * @example
     * // Update one Specialization
     * const specialization = await prisma.specialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecializationUpdateArgs>(args: SelectSubset<T, SpecializationUpdateArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specializations.
     * @param {SpecializationDeleteManyArgs} args - Arguments to filter Specializations to delete.
     * @example
     * // Delete a few Specializations
     * const { count } = await prisma.specialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecializationDeleteManyArgs>(args?: SelectSubset<T, SpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specializations
     * const specialization = await prisma.specialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecializationUpdateManyArgs>(args: SelectSubset<T, SpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Specialization.
     * @param {SpecializationUpsertArgs} args - Arguments to update or create a Specialization.
     * @example
     * // Update or create a Specialization
     * const specialization = await prisma.specialization.upsert({
     *   create: {
     *     // ... data to create a Specialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialization we want to update
     *   }
     * })
     */
    upsert<T extends SpecializationUpsertArgs>(args: SelectSubset<T, SpecializationUpsertArgs<ExtArgs>>): Prisma__SpecializationClient<$Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationCountArgs} args - Arguments to filter Specializations to count.
     * @example
     * // Count the number of Specializations
     * const count = await prisma.specialization.count({
     *   where: {
     *     // ... the filter for the Specializations we want to count
     *   }
     * })
    **/
    count<T extends SpecializationCountArgs>(
      args?: Subset<T, SpecializationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecializationAggregateArgs>(args: Subset<T, SpecializationAggregateArgs>): Prisma.PrismaPromise<GetSpecializationAggregateType<T>>

    /**
     * Group by Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecializationGroupByArgs['orderBy'] }
        : { orderBy?: SpecializationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialization model
   */
  readonly fields: SpecializationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecializationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialization model
   */
  interface SpecializationFieldRefs {
    readonly id: FieldRef<"Specialization", 'String'>
    readonly name: FieldRef<"Specialization", 'String'>
    readonly description: FieldRef<"Specialization", 'String'>
    readonly isActive: FieldRef<"Specialization", 'Boolean'>
    readonly createdAt: FieldRef<"Specialization", 'DateTime'>
    readonly updatedAt: FieldRef<"Specialization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specialization findUnique
   */
  export type SpecializationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization findUniqueOrThrow
   */
  export type SpecializationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization findFirst
   */
  export type SpecializationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     */
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Specialization findFirstOrThrow
   */
  export type SpecializationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * Filter, which Specialization to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specializations.
     */
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Specialization findMany
   */
  export type SpecializationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * Filter, which Specializations to fetch.
     */
    where?: SpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specializations to fetch.
     */
    orderBy?: SpecializationOrderByWithRelationInput | SpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specializations.
     */
    cursor?: SpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specializations.
     */
    skip?: number
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * Specialization create
   */
  export type SpecializationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * The data needed to create a Specialization.
     */
    data: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
  }

  /**
   * Specialization createMany
   */
  export type SpecializationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specializations.
     */
    data: SpecializationCreateManyInput | SpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialization update
   */
  export type SpecializationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * The data needed to update a Specialization.
     */
    data: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
    /**
     * Choose, which Specialization to update.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization updateMany
   */
  export type SpecializationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specializations.
     */
    data: XOR<SpecializationUpdateManyMutationInput, SpecializationUncheckedUpdateManyInput>
    /**
     * Filter which Specializations to update
     */
    where?: SpecializationWhereInput
    /**
     * Limit how many Specializations to update.
     */
    limit?: number
  }

  /**
   * Specialization upsert
   */
  export type SpecializationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * The filter to search for the Specialization to update in case it exists.
     */
    where: SpecializationWhereUniqueInput
    /**
     * In case the Specialization found by the `where` argument doesn't exist, create a new Specialization with this data.
     */
    create: XOR<SpecializationCreateInput, SpecializationUncheckedCreateInput>
    /**
     * In case the Specialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecializationUpdateInput, SpecializationUncheckedUpdateInput>
  }

  /**
   * Specialization delete
   */
  export type SpecializationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
    /**
     * Filter which Specialization to delete.
     */
    where: SpecializationWhereUniqueInput
  }

  /**
   * Specialization deleteMany
   */
  export type SpecializationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specializations to delete
     */
    where?: SpecializationWhereInput
    /**
     * Limit how many Specializations to delete.
     */
    limit?: number
  }

  /**
   * Specialization without action
   */
  export type SpecializationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialization
     */
    select?: SpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialization
     */
    omit?: SpecializationOmit<ExtArgs> | null
  }


  /**
   * Model DoctorProfile
   */

  export type AggregateDoctorProfile = {
    _count: DoctorProfileCountAggregateOutputType | null
    _avg: DoctorProfileAvgAggregateOutputType | null
    _sum: DoctorProfileSumAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  export type DoctorProfileAvgAggregateOutputType = {
    overallRating: Decimal | null
  }

  export type DoctorProfileSumAggregateOutputType = {
    overallRating: Decimal | null
  }

  export type DoctorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    bio: string | null
    website: string | null
    overallRating: Decimal | null
    profileImageUrl: string | null
    documentUrl: string | null
    resumeUrl: string | null
    isVerified: boolean | null
    verifiedBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    bio: string | null
    website: string | null
    overallRating: Decimal | null
    profileImageUrl: string | null
    documentUrl: string | null
    resumeUrl: string | null
    isVerified: boolean | null
    verifiedBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    bio: number
    website: number
    overallRating: number
    profileImageUrl: number
    documentUrl: number
    resumeUrl: number
    isVerified: number
    verifiedBy: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorProfileAvgAggregateInputType = {
    overallRating?: true
  }

  export type DoctorProfileSumAggregateInputType = {
    overallRating?: true
  }

  export type DoctorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    bio?: true
    website?: true
    overallRating?: true
    profileImageUrl?: true
    documentUrl?: true
    resumeUrl?: true
    isVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    bio?: true
    website?: true
    overallRating?: true
    profileImageUrl?: true
    documentUrl?: true
    resumeUrl?: true
    isVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    bio?: true
    website?: true
    overallRating?: true
    profileImageUrl?: true
    documentUrl?: true
    resumeUrl?: true
    isVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfile to aggregate.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorProfiles
    **/
    _count?: true | DoctorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type GetDoctorProfileAggregateType<T extends DoctorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorProfile[P]>
      : GetScalarType<T[P], AggregateDoctorProfile[P]>
  }




  export type DoctorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorProfileWhereInput
    orderBy?: DoctorProfileOrderByWithAggregationInput | DoctorProfileOrderByWithAggregationInput[]
    by: DoctorProfileScalarFieldEnum[] | DoctorProfileScalarFieldEnum
    having?: DoctorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorProfileCountAggregateInputType | true
    _avg?: DoctorProfileAvgAggregateInputType
    _sum?: DoctorProfileSumAggregateInputType
    _min?: DoctorProfileMinAggregateInputType
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type DoctorProfileGroupByOutputType = {
    id: string
    userId: string
    fullName: string
    bio: string | null
    website: string | null
    overallRating: Decimal
    profileImageUrl: string | null
    documentUrl: string | null
    resumeUrl: string | null
    isVerified: boolean
    verifiedBy: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: DoctorProfileCountAggregateOutputType | null
    _avg: DoctorProfileAvgAggregateOutputType | null
    _sum: DoctorProfileSumAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  type GetDoctorProfileGroupByPayload<T extends DoctorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
        }
      >
    >


  export type DoctorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    bio?: boolean
    website?: boolean
    overallRating?: boolean
    profileImageUrl?: boolean
    documentUrl?: boolean
    resumeUrl?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | DoctorProfile$appointmentArgs<ExtArgs>
    doctorSpecialization?: boolean | DoctorProfile$doctorSpecializationArgs<ExtArgs>
    doctorRating?: boolean | DoctorProfile$doctorRatingArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>



  export type DoctorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    bio?: boolean
    website?: boolean
    overallRating?: boolean
    profileImageUrl?: boolean
    documentUrl?: boolean
    resumeUrl?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "bio" | "website" | "overallRating" | "profileImageUrl" | "documentUrl" | "resumeUrl" | "isVerified" | "verifiedBy" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorProfile"]>
  export type DoctorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | DoctorProfile$appointmentArgs<ExtArgs>
    doctorSpecialization?: boolean | DoctorProfile$doctorSpecializationArgs<ExtArgs>
    doctorRating?: boolean | DoctorProfile$doctorRatingArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DoctorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      doctorSpecialization: Prisma.$DoctorSpecializationPayload<ExtArgs>[]
      doctorRating: Prisma.$DoctorRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string
      bio: string | null
      website: string | null
      overallRating: Prisma.Decimal
      profileImageUrl: string | null
      documentUrl: string | null
      resumeUrl: string | null
      isVerified: boolean
      verifiedBy: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["doctorProfile"]>
    composites: {}
  }

  type DoctorProfileGetPayload<S extends boolean | null | undefined | DoctorProfileDefaultArgs> = $Result.GetResult<Prisma.$DoctorProfilePayload, S>

  type DoctorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorProfileCountAggregateInputType | true
    }

  export interface DoctorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorProfile'], meta: { name: 'DoctorProfile' } }
    /**
     * Find zero or one DoctorProfile that matches the filter.
     * @param {DoctorProfileFindUniqueArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorProfileFindUniqueArgs>(args: SelectSubset<T, DoctorProfileFindUniqueArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorProfileFindUniqueOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorProfileFindFirstArgs>(args?: SelectSubset<T, DoctorProfileFindFirstArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany()
     * 
     * // Get first 10 DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorProfileFindManyArgs>(args?: SelectSubset<T, DoctorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorProfile.
     * @param {DoctorProfileCreateArgs} args - Arguments to create a DoctorProfile.
     * @example
     * // Create one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.create({
     *   data: {
     *     // ... data to create a DoctorProfile
     *   }
     * })
     * 
     */
    create<T extends DoctorProfileCreateArgs>(args: SelectSubset<T, DoctorProfileCreateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorProfiles.
     * @param {DoctorProfileCreateManyArgs} args - Arguments to create many DoctorProfiles.
     * @example
     * // Create many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorProfileCreateManyArgs>(args?: SelectSubset<T, DoctorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorProfile.
     * @param {DoctorProfileDeleteArgs} args - Arguments to delete one DoctorProfile.
     * @example
     * // Delete one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.delete({
     *   where: {
     *     // ... filter to delete one DoctorProfile
     *   }
     * })
     * 
     */
    delete<T extends DoctorProfileDeleteArgs>(args: SelectSubset<T, DoctorProfileDeleteArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorProfile.
     * @param {DoctorProfileUpdateArgs} args - Arguments to update one DoctorProfile.
     * @example
     * // Update one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorProfileUpdateArgs>(args: SelectSubset<T, DoctorProfileUpdateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorProfiles.
     * @param {DoctorProfileDeleteManyArgs} args - Arguments to filter DoctorProfiles to delete.
     * @example
     * // Delete a few DoctorProfiles
     * const { count } = await prisma.doctorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorProfileDeleteManyArgs>(args?: SelectSubset<T, DoctorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorProfileUpdateManyArgs>(args: SelectSubset<T, DoctorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorProfile.
     * @param {DoctorProfileUpsertArgs} args - Arguments to update or create a DoctorProfile.
     * @example
     * // Update or create a DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.upsert({
     *   create: {
     *     // ... data to create a DoctorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorProfile we want to update
     *   }
     * })
     */
    upsert<T extends DoctorProfileUpsertArgs>(args: SelectSubset<T, DoctorProfileUpsertArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileCountArgs} args - Arguments to filter DoctorProfiles to count.
     * @example
     * // Count the number of DoctorProfiles
     * const count = await prisma.doctorProfile.count({
     *   where: {
     *     // ... the filter for the DoctorProfiles we want to count
     *   }
     * })
    **/
    count<T extends DoctorProfileCountArgs>(
      args?: Subset<T, DoctorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorProfileAggregateArgs>(args: Subset<T, DoctorProfileAggregateArgs>): Prisma.PrismaPromise<GetDoctorProfileAggregateType<T>>

    /**
     * Group by DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorProfileGroupByArgs['orderBy'] }
        : { orderBy?: DoctorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorProfile model
   */
  readonly fields: DoctorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends DoctorProfile$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorSpecialization<T extends DoctorProfile$doctorSpecializationArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$doctorSpecializationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorRating<T extends DoctorProfile$doctorRatingArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$doctorRatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorProfile model
   */
  interface DoctorProfileFieldRefs {
    readonly id: FieldRef<"DoctorProfile", 'String'>
    readonly userId: FieldRef<"DoctorProfile", 'String'>
    readonly fullName: FieldRef<"DoctorProfile", 'String'>
    readonly bio: FieldRef<"DoctorProfile", 'String'>
    readonly website: FieldRef<"DoctorProfile", 'String'>
    readonly overallRating: FieldRef<"DoctorProfile", 'Decimal'>
    readonly profileImageUrl: FieldRef<"DoctorProfile", 'String'>
    readonly documentUrl: FieldRef<"DoctorProfile", 'String'>
    readonly resumeUrl: FieldRef<"DoctorProfile", 'String'>
    readonly isVerified: FieldRef<"DoctorProfile", 'Boolean'>
    readonly verifiedBy: FieldRef<"DoctorProfile", 'String'>
    readonly isActive: FieldRef<"DoctorProfile", 'Boolean'>
    readonly createdAt: FieldRef<"DoctorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorProfile findUnique
   */
  export type DoctorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findUniqueOrThrow
   */
  export type DoctorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findFirst
   */
  export type DoctorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findFirstOrThrow
   */
  export type DoctorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findMany
   */
  export type DoctorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfiles to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile create
   */
  export type DoctorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorProfile.
     */
    data: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
  }

  /**
   * DoctorProfile createMany
   */
  export type DoctorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorProfiles.
     */
    data: DoctorProfileCreateManyInput | DoctorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorProfile update
   */
  export type DoctorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorProfile.
     */
    data: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
    /**
     * Choose, which DoctorProfile to update.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile updateMany
   */
  export type DoctorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorProfiles.
     */
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyInput>
    /**
     * Filter which DoctorProfiles to update
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to update.
     */
    limit?: number
  }

  /**
   * DoctorProfile upsert
   */
  export type DoctorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorProfile to update in case it exists.
     */
    where: DoctorProfileWhereUniqueInput
    /**
     * In case the DoctorProfile found by the `where` argument doesn't exist, create a new DoctorProfile with this data.
     */
    create: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
    /**
     * In case the DoctorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
  }

  /**
   * DoctorProfile delete
   */
  export type DoctorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter which DoctorProfile to delete.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile deleteMany
   */
  export type DoctorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfiles to delete
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to delete.
     */
    limit?: number
  }

  /**
   * DoctorProfile.appointment
   */
  export type DoctorProfile$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * DoctorProfile.doctorSpecialization
   */
  export type DoctorProfile$doctorSpecializationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    where?: DoctorSpecializationWhereInput
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    cursor?: DoctorSpecializationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorProfile.doctorRating
   */
  export type DoctorProfile$doctorRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    where?: DoctorRatingWhereInput
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    cursor?: DoctorRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * DoctorProfile without action
   */
  export type DoctorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSpecialization
   */

  export type AggregateDoctorSpecialization = {
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  export type DoctorSpecializationMinAggregateOutputType = {
    id: string | null
    doctorProfileId: string | null
    specialization: string | null
    documentUrl: string | null
    isVerified: boolean | null
    verifiedBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorSpecializationMaxAggregateOutputType = {
    id: string | null
    doctorProfileId: string | null
    specialization: string | null
    documentUrl: string | null
    isVerified: boolean | null
    verifiedBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorSpecializationCountAggregateOutputType = {
    id: number
    doctorProfileId: number
    specialization: number
    documentUrl: number
    isVerified: number
    verifiedBy: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorSpecializationMinAggregateInputType = {
    id?: true
    doctorProfileId?: true
    specialization?: true
    documentUrl?: true
    isVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorSpecializationMaxAggregateInputType = {
    id?: true
    doctorProfileId?: true
    specialization?: true
    documentUrl?: true
    isVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorSpecializationCountAggregateInputType = {
    id?: true
    doctorProfileId?: true
    specialization?: true
    documentUrl?: true
    isVerified?: true
    verifiedBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorSpecializationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialization to aggregate.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSpecializations
    **/
    _count?: true | DoctorSpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type GetDoctorSpecializationAggregateType<T extends DoctorSpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
      : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
  }




  export type DoctorSpecializationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecializationWhereInput
    orderBy?: DoctorSpecializationOrderByWithAggregationInput | DoctorSpecializationOrderByWithAggregationInput[]
    by: DoctorSpecializationScalarFieldEnum[] | DoctorSpecializationScalarFieldEnum
    having?: DoctorSpecializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecializationCountAggregateInputType | true
    _min?: DoctorSpecializationMinAggregateInputType
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type DoctorSpecializationGroupByOutputType = {
    id: string
    doctorProfileId: string
    specialization: string
    documentUrl: string | null
    isVerified: boolean
    verifiedBy: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  type GetDoctorSpecializationGroupByPayload<T extends DoctorSpecializationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSpecializationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorProfileId?: boolean
    specialization?: boolean
    documentUrl?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorProfile?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialization"]>



  export type DoctorSpecializationSelectScalar = {
    id?: boolean
    doctorProfileId?: boolean
    specialization?: boolean
    documentUrl?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorSpecializationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorProfileId" | "specialization" | "documentUrl" | "isVerified" | "verifiedBy" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorSpecialization"]>
  export type DoctorSpecializationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorProfile?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }

  export type $DoctorSpecializationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSpecialization"
    objects: {
      doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorProfileId: string
      specialization: string
      documentUrl: string | null
      isVerified: boolean
      verifiedBy: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["doctorSpecialization"]>
    composites: {}
  }

  type DoctorSpecializationGetPayload<S extends boolean | null | undefined | DoctorSpecializationDefaultArgs> = $Result.GetResult<Prisma.$DoctorSpecializationPayload, S>

  type DoctorSpecializationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSpecializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSpecializationCountAggregateInputType | true
    }

  export interface DoctorSpecializationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpecialization'], meta: { name: 'DoctorSpecialization' } }
    /**
     * Find zero or one DoctorSpecialization that matches the filter.
     * @param {DoctorSpecializationFindUniqueArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSpecializationFindUniqueArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSpecialization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSpecializationFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSpecializationFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSpecializationFindFirstArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSpecializationFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSpecializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
     * 
     * // Get first 10 DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorSpecializationFindManyArgs>(args?: SelectSubset<T, DoctorSpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSpecialization.
     * @param {DoctorSpecializationCreateArgs} args - Arguments to create a DoctorSpecialization.
     * @example
     * // Create one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.create({
     *   data: {
     *     // ... data to create a DoctorSpecialization
     *   }
     * })
     * 
     */
    create<T extends DoctorSpecializationCreateArgs>(args: SelectSubset<T, DoctorSpecializationCreateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSpecializations.
     * @param {DoctorSpecializationCreateManyArgs} args - Arguments to create many DoctorSpecializations.
     * @example
     * // Create many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSpecializationCreateManyArgs>(args?: SelectSubset<T, DoctorSpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorSpecialization.
     * @param {DoctorSpecializationDeleteArgs} args - Arguments to delete one DoctorSpecialization.
     * @example
     * // Delete one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpecialization
     *   }
     * })
     * 
     */
    delete<T extends DoctorSpecializationDeleteArgs>(args: SelectSubset<T, DoctorSpecializationDeleteArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSpecialization.
     * @param {DoctorSpecializationUpdateArgs} args - Arguments to update one DoctorSpecialization.
     * @example
     * // Update one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSpecializationUpdateArgs>(args: SelectSubset<T, DoctorSpecializationUpdateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSpecializations.
     * @param {DoctorSpecializationDeleteManyArgs} args - Arguments to filter DoctorSpecializations to delete.
     * @example
     * // Delete a few DoctorSpecializations
     * const { count } = await prisma.doctorSpecialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSpecializationDeleteManyArgs>(args?: SelectSubset<T, DoctorSpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSpecializationUpdateManyArgs>(args: SelectSubset<T, DoctorSpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorSpecialization.
     * @param {DoctorSpecializationUpsertArgs} args - Arguments to update or create a DoctorSpecialization.
     * @example
     * // Update or create a DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.upsert({
     *   create: {
     *     // ... data to create a DoctorSpecialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpecialization we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSpecializationUpsertArgs>(args: SelectSubset<T, DoctorSpecializationUpsertArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationCountArgs} args - Arguments to filter DoctorSpecializations to count.
     * @example
     * // Count the number of DoctorSpecializations
     * const count = await prisma.doctorSpecialization.count({
     *   where: {
     *     // ... the filter for the DoctorSpecializations we want to count
     *   }
     * })
    **/
    count<T extends DoctorSpecializationCountArgs>(
      args?: Subset<T, DoctorSpecializationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorSpecializationAggregateArgs>(args: Subset<T, DoctorSpecializationAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecializationAggregateType<T>>

    /**
     * Group by DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorSpecializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSpecializationGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSpecializationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorSpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSpecialization model
   */
  readonly fields: DoctorSpecializationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSpecialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSpecializationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorProfile<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorSpecialization model
   */
  interface DoctorSpecializationFieldRefs {
    readonly id: FieldRef<"DoctorSpecialization", 'String'>
    readonly doctorProfileId: FieldRef<"DoctorSpecialization", 'String'>
    readonly specialization: FieldRef<"DoctorSpecialization", 'String'>
    readonly documentUrl: FieldRef<"DoctorSpecialization", 'String'>
    readonly isVerified: FieldRef<"DoctorSpecialization", 'Boolean'>
    readonly verifiedBy: FieldRef<"DoctorSpecialization", 'String'>
    readonly isActive: FieldRef<"DoctorSpecialization", 'Boolean'>
    readonly createdAt: FieldRef<"DoctorSpecialization", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorSpecialization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSpecialization findUnique
   */
  export type DoctorSpecializationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findUniqueOrThrow
   */
  export type DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findFirst
   */
  export type DoctorSpecializationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findFirstOrThrow
   */
  export type DoctorSpecializationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findMany
   */
  export type DoctorSpecializationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecializations to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization create
   */
  export type DoctorSpecializationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
  }

  /**
   * DoctorSpecialization createMany
   */
  export type DoctorSpecializationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSpecializations.
     */
    data: DoctorSpecializationCreateManyInput | DoctorSpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpecialization update
   */
  export type DoctorSpecializationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
    /**
     * Choose, which DoctorSpecialization to update.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization updateMany
   */
  export type DoctorSpecializationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSpecializations.
     */
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecializations to update
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to update.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization upsert
   */
  export type DoctorSpecializationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSpecialization to update in case it exists.
     */
    where: DoctorSpecializationWhereUniqueInput
    /**
     * In case the DoctorSpecialization found by the `where` argument doesn't exist, create a new DoctorSpecialization with this data.
     */
    create: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
    /**
     * In case the DoctorSpecialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
  }

  /**
   * DoctorSpecialization delete
   */
  export type DoctorSpecializationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter which DoctorSpecialization to delete.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization deleteMany
   */
  export type DoctorSpecializationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecializations to delete
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to delete.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization without action
   */
  export type DoctorSpecializationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
  }


  /**
   * Model DoctorRating
   */

  export type AggregateDoctorRating = {
    _count: DoctorRatingCountAggregateOutputType | null
    _avg: DoctorRatingAvgAggregateOutputType | null
    _sum: DoctorRatingSumAggregateOutputType | null
    _min: DoctorRatingMinAggregateOutputType | null
    _max: DoctorRatingMaxAggregateOutputType | null
  }

  export type DoctorRatingAvgAggregateOutputType = {
    rating: Decimal | null
  }

  export type DoctorRatingSumAggregateOutputType = {
    rating: Decimal | null
  }

  export type DoctorRatingMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    doctorProfileId: string | null
    appointmentId: string | null
    review: string | null
    rating: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
  }

  export type DoctorRatingMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    doctorProfileId: string | null
    appointmentId: string | null
    review: string | null
    rating: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
  }

  export type DoctorRatingCountAggregateOutputType = {
    id: number
    doctorId: number
    doctorProfileId: number
    appointmentId: number
    review: number
    rating: number
    createdAt: number
    updatedAt: number
    isActive: number
    _all: number
  }


  export type DoctorRatingAvgAggregateInputType = {
    rating?: true
  }

  export type DoctorRatingSumAggregateInputType = {
    rating?: true
  }

  export type DoctorRatingMinAggregateInputType = {
    id?: true
    doctorId?: true
    doctorProfileId?: true
    appointmentId?: true
    review?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
  }

  export type DoctorRatingMaxAggregateInputType = {
    id?: true
    doctorId?: true
    doctorProfileId?: true
    appointmentId?: true
    review?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
  }

  export type DoctorRatingCountAggregateInputType = {
    id?: true
    doctorId?: true
    doctorProfileId?: true
    appointmentId?: true
    review?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    _all?: true
  }

  export type DoctorRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorRating to aggregate.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorRatings
    **/
    _count?: true | DoctorRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorRatingMaxAggregateInputType
  }

  export type GetDoctorRatingAggregateType<T extends DoctorRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorRating[P]>
      : GetScalarType<T[P], AggregateDoctorRating[P]>
  }




  export type DoctorRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorRatingWhereInput
    orderBy?: DoctorRatingOrderByWithAggregationInput | DoctorRatingOrderByWithAggregationInput[]
    by: DoctorRatingScalarFieldEnum[] | DoctorRatingScalarFieldEnum
    having?: DoctorRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorRatingCountAggregateInputType | true
    _avg?: DoctorRatingAvgAggregateInputType
    _sum?: DoctorRatingSumAggregateInputType
    _min?: DoctorRatingMinAggregateInputType
    _max?: DoctorRatingMaxAggregateInputType
  }

  export type DoctorRatingGroupByOutputType = {
    id: string
    doctorId: string
    doctorProfileId: string
    appointmentId: string
    review: string
    rating: Decimal
    createdAt: Date
    updatedAt: Date | null
    isActive: boolean
    _count: DoctorRatingCountAggregateOutputType | null
    _avg: DoctorRatingAvgAggregateOutputType | null
    _sum: DoctorRatingSumAggregateOutputType | null
    _min: DoctorRatingMinAggregateOutputType | null
    _max: DoctorRatingMaxAggregateOutputType | null
  }

  type GetDoctorRatingGroupByPayload<T extends DoctorRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorRatingGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorRatingGroupByOutputType[P]>
        }
      >
    >


  export type DoctorRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    doctorProfileId?: boolean
    appointmentId?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorProfile?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorRating"]>



  export type DoctorRatingSelectScalar = {
    id?: boolean
    doctorId?: boolean
    doctorProfileId?: boolean
    appointmentId?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
  }

  export type DoctorRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "doctorProfileId" | "appointmentId" | "review" | "rating" | "createdAt" | "updatedAt" | "isActive", ExtArgs["result"]["doctorRating"]>
  export type DoctorRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorProfile?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $DoctorRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorRating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      doctorProfileId: string
      appointmentId: string
      review: string
      rating: Prisma.Decimal
      createdAt: Date
      updatedAt: Date | null
      isActive: boolean
    }, ExtArgs["result"]["doctorRating"]>
    composites: {}
  }

  type DoctorRatingGetPayload<S extends boolean | null | undefined | DoctorRatingDefaultArgs> = $Result.GetResult<Prisma.$DoctorRatingPayload, S>

  type DoctorRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorRatingCountAggregateInputType | true
    }

  export interface DoctorRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorRating'], meta: { name: 'DoctorRating' } }
    /**
     * Find zero or one DoctorRating that matches the filter.
     * @param {DoctorRatingFindUniqueArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorRatingFindUniqueArgs>(args: SelectSubset<T, DoctorRatingFindUniqueArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorRatingFindUniqueOrThrowArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingFindFirstArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorRatingFindFirstArgs>(args?: SelectSubset<T, DoctorRatingFindFirstArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingFindFirstOrThrowArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorRatings
     * const doctorRatings = await prisma.doctorRating.findMany()
     * 
     * // Get first 10 DoctorRatings
     * const doctorRatings = await prisma.doctorRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorRatingWithIdOnly = await prisma.doctorRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorRatingFindManyArgs>(args?: SelectSubset<T, DoctorRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorRating.
     * @param {DoctorRatingCreateArgs} args - Arguments to create a DoctorRating.
     * @example
     * // Create one DoctorRating
     * const DoctorRating = await prisma.doctorRating.create({
     *   data: {
     *     // ... data to create a DoctorRating
     *   }
     * })
     * 
     */
    create<T extends DoctorRatingCreateArgs>(args: SelectSubset<T, DoctorRatingCreateArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorRatings.
     * @param {DoctorRatingCreateManyArgs} args - Arguments to create many DoctorRatings.
     * @example
     * // Create many DoctorRatings
     * const doctorRating = await prisma.doctorRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorRatingCreateManyArgs>(args?: SelectSubset<T, DoctorRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorRating.
     * @param {DoctorRatingDeleteArgs} args - Arguments to delete one DoctorRating.
     * @example
     * // Delete one DoctorRating
     * const DoctorRating = await prisma.doctorRating.delete({
     *   where: {
     *     // ... filter to delete one DoctorRating
     *   }
     * })
     * 
     */
    delete<T extends DoctorRatingDeleteArgs>(args: SelectSubset<T, DoctorRatingDeleteArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorRating.
     * @param {DoctorRatingUpdateArgs} args - Arguments to update one DoctorRating.
     * @example
     * // Update one DoctorRating
     * const doctorRating = await prisma.doctorRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorRatingUpdateArgs>(args: SelectSubset<T, DoctorRatingUpdateArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorRatings.
     * @param {DoctorRatingDeleteManyArgs} args - Arguments to filter DoctorRatings to delete.
     * @example
     * // Delete a few DoctorRatings
     * const { count } = await prisma.doctorRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorRatingDeleteManyArgs>(args?: SelectSubset<T, DoctorRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorRatings
     * const doctorRating = await prisma.doctorRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorRatingUpdateManyArgs>(args: SelectSubset<T, DoctorRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorRating.
     * @param {DoctorRatingUpsertArgs} args - Arguments to update or create a DoctorRating.
     * @example
     * // Update or create a DoctorRating
     * const doctorRating = await prisma.doctorRating.upsert({
     *   create: {
     *     // ... data to create a DoctorRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorRating we want to update
     *   }
     * })
     */
    upsert<T extends DoctorRatingUpsertArgs>(args: SelectSubset<T, DoctorRatingUpsertArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingCountArgs} args - Arguments to filter DoctorRatings to count.
     * @example
     * // Count the number of DoctorRatings
     * const count = await prisma.doctorRating.count({
     *   where: {
     *     // ... the filter for the DoctorRatings we want to count
     *   }
     * })
    **/
    count<T extends DoctorRatingCountArgs>(
      args?: Subset<T, DoctorRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorRatingAggregateArgs>(args: Subset<T, DoctorRatingAggregateArgs>): Prisma.PrismaPromise<GetDoctorRatingAggregateType<T>>

    /**
     * Group by DoctorRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorRatingGroupByArgs['orderBy'] }
        : { orderBy?: DoctorRatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorRating model
   */
  readonly fields: DoctorRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctorProfile<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorRating model
   */
  interface DoctorRatingFieldRefs {
    readonly id: FieldRef<"DoctorRating", 'String'>
    readonly doctorId: FieldRef<"DoctorRating", 'String'>
    readonly doctorProfileId: FieldRef<"DoctorRating", 'String'>
    readonly appointmentId: FieldRef<"DoctorRating", 'String'>
    readonly review: FieldRef<"DoctorRating", 'String'>
    readonly rating: FieldRef<"DoctorRating", 'Decimal'>
    readonly createdAt: FieldRef<"DoctorRating", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorRating", 'DateTime'>
    readonly isActive: FieldRef<"DoctorRating", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DoctorRating findUnique
   */
  export type DoctorRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating findUniqueOrThrow
   */
  export type DoctorRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating findFirst
   */
  export type DoctorRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorRatings.
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorRatings.
     */
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * DoctorRating findFirstOrThrow
   */
  export type DoctorRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorRatings.
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorRatings.
     */
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * DoctorRating findMany
   */
  export type DoctorRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * Filter, which DoctorRatings to fetch.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorRatings.
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * DoctorRating create
   */
  export type DoctorRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorRating.
     */
    data: XOR<DoctorRatingCreateInput, DoctorRatingUncheckedCreateInput>
  }

  /**
   * DoctorRating createMany
   */
  export type DoctorRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorRatings.
     */
    data: DoctorRatingCreateManyInput | DoctorRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorRating update
   */
  export type DoctorRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorRating.
     */
    data: XOR<DoctorRatingUpdateInput, DoctorRatingUncheckedUpdateInput>
    /**
     * Choose, which DoctorRating to update.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating updateMany
   */
  export type DoctorRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorRatings.
     */
    data: XOR<DoctorRatingUpdateManyMutationInput, DoctorRatingUncheckedUpdateManyInput>
    /**
     * Filter which DoctorRatings to update
     */
    where?: DoctorRatingWhereInput
    /**
     * Limit how many DoctorRatings to update.
     */
    limit?: number
  }

  /**
   * DoctorRating upsert
   */
  export type DoctorRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorRating to update in case it exists.
     */
    where: DoctorRatingWhereUniqueInput
    /**
     * In case the DoctorRating found by the `where` argument doesn't exist, create a new DoctorRating with this data.
     */
    create: XOR<DoctorRatingCreateInput, DoctorRatingUncheckedCreateInput>
    /**
     * In case the DoctorRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorRatingUpdateInput, DoctorRatingUncheckedUpdateInput>
  }

  /**
   * DoctorRating delete
   */
  export type DoctorRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    /**
     * Filter which DoctorRating to delete.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating deleteMany
   */
  export type DoctorRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorRatings to delete
     */
    where?: DoctorRatingWhereInput
    /**
     * Limit how many DoctorRatings to delete.
     */
    limit?: number
  }

  /**
   * DoctorRating without action
   */
  export type DoctorRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    displayName: string | null
    phoneNumber: string | null
    profileImageUrl: string | null
    provider: $Enums.AuthProvider | null
    providerId: string | null
    isEmailVerified: boolean | null
    isPhoneVerified: boolean | null
    isActive: boolean | null
    timezone: string | null
    locale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    displayName: string | null
    phoneNumber: string | null
    profileImageUrl: string | null
    provider: $Enums.AuthProvider | null
    providerId: string | null
    isEmailVerified: boolean | null
    isPhoneVerified: boolean | null
    isActive: boolean | null
    timezone: string | null
    locale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    displayName: number
    phoneNumber: number
    profileImageUrl: number
    provider: number
    providerId: number
    isEmailVerified: number
    isPhoneVerified: number
    isActive: number
    timezone: number
    locale: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    displayName?: true
    phoneNumber?: true
    profileImageUrl?: true
    provider?: true
    providerId?: true
    isEmailVerified?: true
    isPhoneVerified?: true
    isActive?: true
    timezone?: true
    locale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    displayName?: true
    phoneNumber?: true
    profileImageUrl?: true
    provider?: true
    providerId?: true
    isEmailVerified?: true
    isPhoneVerified?: true
    isActive?: true
    timezone?: true
    locale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    displayName?: true
    phoneNumber?: true
    profileImageUrl?: true
    provider?: true
    providerId?: true
    isEmailVerified?: true
    isPhoneVerified?: true
    isActive?: true
    timezone?: true
    locale?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    displayName: string | null
    phoneNumber: string | null
    profileImageUrl: string | null
    provider: $Enums.AuthProvider
    providerId: string | null
    isEmailVerified: boolean
    isPhoneVerified: boolean
    isActive: boolean
    timezone: string | null
    locale: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    displayName?: boolean
    phoneNumber?: boolean
    profileImageUrl?: boolean
    provider?: boolean
    providerId?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: boolean
    locale?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    bookAppointments?: boolean | User$bookAppointmentsArgs<ExtArgs>
    appointmentSlots?: boolean | User$appointmentSlotsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    doctorProfiles?: boolean | User$doctorProfilesArgs<ExtArgs>
    doctorRatings?: boolean | User$doctorRatingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    displayName?: boolean
    phoneNumber?: boolean
    profileImageUrl?: boolean
    provider?: boolean
    providerId?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: boolean
    locale?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "displayName" | "phoneNumber" | "profileImageUrl" | "provider" | "providerId" | "isEmailVerified" | "isPhoneVerified" | "isActive" | "timezone" | "locale" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    bookAppointments?: boolean | User$bookAppointmentsArgs<ExtArgs>
    appointmentSlots?: boolean | User$appointmentSlotsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    doctorProfiles?: boolean | User$doctorProfilesArgs<ExtArgs>
    doctorRatings?: boolean | User$doctorRatingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      bookAppointments: Prisma.$BookAppointmentPayload<ExtArgs>[]
      appointmentSlots: Prisma.$AppointmentSlotPayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      doctorProfiles: Prisma.$DoctorProfilePayload<ExtArgs>[]
      doctorRatings: Prisma.$DoctorRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      firstName: string | null
      lastName: string | null
      displayName: string | null
      phoneNumber: string | null
      profileImageUrl: string | null
      provider: $Enums.AuthProvider
      providerId: string | null
      isEmailVerified: boolean
      isPhoneVerified: boolean
      isActive: boolean
      timezone: string | null
      locale: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookAppointments<T extends User$bookAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentSlots<T extends User$appointmentSlotsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends User$locationsArgs<ExtArgs> = {}>(args?: Subset<T, User$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends User$servicesArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorProfiles<T extends User$doctorProfilesArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorRatings<T extends User$doctorRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'AuthProvider'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isPhoneVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly locale: FieldRef<"User", 'String'>
    readonly metadata: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.bookAppointments
   */
  export type User$bookAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAppointment
     */
    select?: BookAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAppointment
     */
    omit?: BookAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAppointmentInclude<ExtArgs> | null
    where?: BookAppointmentWhereInput
    orderBy?: BookAppointmentOrderByWithRelationInput | BookAppointmentOrderByWithRelationInput[]
    cursor?: BookAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAppointmentScalarFieldEnum | BookAppointmentScalarFieldEnum[]
  }

  /**
   * User.appointmentSlots
   */
  export type User$appointmentSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlot
     */
    select?: AppointmentSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlot
     */
    omit?: AppointmentSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotInclude<ExtArgs> | null
    where?: AppointmentSlotWhereInput
    orderBy?: AppointmentSlotOrderByWithRelationInput | AppointmentSlotOrderByWithRelationInput[]
    cursor?: AppointmentSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentSlotScalarFieldEnum | AppointmentSlotScalarFieldEnum[]
  }

  /**
   * User.locations
   */
  export type User$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * User.services
   */
  export type User$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.doctorProfiles
   */
  export type User$doctorProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    where?: DoctorProfileWhereInput
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    cursor?: DoctorProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * User.doctorRatings
   */
  export type User$doctorRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorRatingInclude<ExtArgs> | null
    where?: DoctorRatingWhereInput
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    cursor?: DoctorRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isActive: boolean
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isActive: boolean
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly isActive: FieldRef<"Role", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>



  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    doctorProfileId: 'doctorProfileId',
    locationId: 'locationId',
    serviceId: 'serviceId',
    appointmentDate: 'appointmentDate',
    status: 'status',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const BookAppointmentScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    locationId: 'locationId',
    appointmentId: 'appointmentId',
    date: 'date',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookAppointmentScalarFieldEnum = (typeof BookAppointmentScalarFieldEnum)[keyof typeof BookAppointmentScalarFieldEnum]


  export const AppointmentSlotScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    locationId: 'locationId',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime',
    appointmentSlotDuration: 'appointmentSlotDuration',
    totalAppointmentSlots: 'totalAppointmentSlots',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentSlotScalarFieldEnum = (typeof AppointmentSlotScalarFieldEnum)[keyof typeof AppointmentSlotScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    zipCode: 'zipCode',
    phone: 'phone',
    isLocationVerified: 'isLocationVerified',
    verifiedBy: 'verifiedBy',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    locationId: 'locationId',
    name: 'name',
    description: 'description',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    transactionId: 'transactionId',
    amount: 'amount',
    status: 'status',
    paymentMethod: 'paymentMethod',
    currencyCode: 'currencyCode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SpecializationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecializationScalarFieldEnum = (typeof SpecializationScalarFieldEnum)[keyof typeof SpecializationScalarFieldEnum]


  export const DoctorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    bio: 'bio',
    website: 'website',
    overallRating: 'overallRating',
    profileImageUrl: 'profileImageUrl',
    documentUrl: 'documentUrl',
    resumeUrl: 'resumeUrl',
    isVerified: 'isVerified',
    verifiedBy: 'verifiedBy',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorProfileScalarFieldEnum = (typeof DoctorProfileScalarFieldEnum)[keyof typeof DoctorProfileScalarFieldEnum]


  export const DoctorSpecializationScalarFieldEnum: {
    id: 'id',
    doctorProfileId: 'doctorProfileId',
    specialization: 'specialization',
    documentUrl: 'documentUrl',
    isVerified: 'isVerified',
    verifiedBy: 'verifiedBy',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorSpecializationScalarFieldEnum = (typeof DoctorSpecializationScalarFieldEnum)[keyof typeof DoctorSpecializationScalarFieldEnum]


  export const DoctorRatingScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    doctorProfileId: 'doctorProfileId',
    appointmentId: 'appointmentId',
    review: 'review',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive'
  };

  export type DoctorRatingScalarFieldEnum = (typeof DoctorRatingScalarFieldEnum)[keyof typeof DoctorRatingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    displayName: 'displayName',
    phoneNumber: 'phoneNumber',
    profileImageUrl: 'profileImageUrl',
    provider: 'provider',
    providerId: 'providerId',
    isEmailVerified: 'isEmailVerified',
    isPhoneVerified: 'isPhoneVerified',
    isActive: 'isActive',
    timezone: 'timezone',
    locale: 'locale',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AppointmentOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    doctorProfileId: 'doctorProfileId',
    locationId: 'locationId',
    serviceId: 'serviceId',
    status: 'status'
  };

  export type AppointmentOrderByRelevanceFieldEnum = (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum]


  export const BookAppointmentOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    locationId: 'locationId',
    appointmentId: 'appointmentId',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status'
  };

  export type BookAppointmentOrderByRelevanceFieldEnum = (typeof BookAppointmentOrderByRelevanceFieldEnum)[keyof typeof BookAppointmentOrderByRelevanceFieldEnum]


  export const AppointmentSlotOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    locationId: 'locationId',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type AppointmentSlotOrderByRelevanceFieldEnum = (typeof AppointmentSlotOrderByRelevanceFieldEnum)[keyof typeof AppointmentSlotOrderByRelevanceFieldEnum]


  export const LocationOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    zipCode: 'zipCode',
    phone: 'phone',
    verifiedBy: 'verifiedBy'
  };

  export type LocationOrderByRelevanceFieldEnum = (typeof LocationOrderByRelevanceFieldEnum)[keyof typeof LocationOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    locationId: 'locationId',
    name: 'name',
    description: 'description'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    transactionId: 'transactionId',
    status: 'status',
    paymentMethod: 'paymentMethod',
    currencyCode: 'currencyCode'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const SpecializationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SpecializationOrderByRelevanceFieldEnum = (typeof SpecializationOrderByRelevanceFieldEnum)[keyof typeof SpecializationOrderByRelevanceFieldEnum]


  export const DoctorProfileOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    bio: 'bio',
    website: 'website',
    profileImageUrl: 'profileImageUrl',
    documentUrl: 'documentUrl',
    resumeUrl: 'resumeUrl',
    verifiedBy: 'verifiedBy'
  };

  export type DoctorProfileOrderByRelevanceFieldEnum = (typeof DoctorProfileOrderByRelevanceFieldEnum)[keyof typeof DoctorProfileOrderByRelevanceFieldEnum]


  export const DoctorSpecializationOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorProfileId: 'doctorProfileId',
    specialization: 'specialization',
    documentUrl: 'documentUrl',
    verifiedBy: 'verifiedBy'
  };

  export type DoctorSpecializationOrderByRelevanceFieldEnum = (typeof DoctorSpecializationOrderByRelevanceFieldEnum)[keyof typeof DoctorSpecializationOrderByRelevanceFieldEnum]


  export const DoctorRatingOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    doctorProfileId: 'doctorProfileId',
    appointmentId: 'appointmentId',
    review: 'review'
  };

  export type DoctorRatingOrderByRelevanceFieldEnum = (typeof DoctorRatingOrderByRelevanceFieldEnum)[keyof typeof DoctorRatingOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    displayName: 'displayName',
    phoneNumber: 'phoneNumber',
    profileImageUrl: 'profileImageUrl',
    providerId: 'providerId',
    timezone: 'timezone',
    locale: 'locale'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const UserRoleOrderByRelevanceFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleOrderByRelevanceFieldEnum = (typeof UserRoleOrderByRelevanceFieldEnum)[keyof typeof UserRoleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    doctorProfileId?: StringFilter<"Appointment"> | string
    locationId?: StringFilter<"Appointment"> | string
    serviceId?: StringFilter<"Appointment"> | string
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringNullableFilter<"Appointment"> | string | null
    isActive?: BoolFilter<"Appointment"> | boolean
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorProfile?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    doctorRating?: DoctorRatingListRelationFilter
    bookAppointment?: BookAppointmentListRelationFilter
    payment?: PaymentListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorProfileId?: SortOrder
    locationId?: SortOrder
    serviceId?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    doctorProfile?: DoctorProfileOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    doctorRating?: DoctorRatingOrderByRelationAggregateInput
    bookAppointment?: BookAppointmentOrderByRelationAggregateInput
    payment?: PaymentOrderByRelationAggregateInput
    _relevance?: AppointmentOrderByRelevanceInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    userId?: StringFilter<"Appointment"> | string
    doctorProfileId?: StringFilter<"Appointment"> | string
    locationId?: StringFilter<"Appointment"> | string
    serviceId?: StringFilter<"Appointment"> | string
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringNullableFilter<"Appointment"> | string | null
    isActive?: BoolFilter<"Appointment"> | boolean
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorProfile?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    doctorRating?: DoctorRatingListRelationFilter
    bookAppointment?: BookAppointmentListRelationFilter
    payment?: PaymentListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorProfileId?: SortOrder
    locationId?: SortOrder
    serviceId?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    userId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorProfileId?: StringWithAggregatesFilter<"Appointment"> | string
    locationId?: StringWithAggregatesFilter<"Appointment"> | string
    serviceId?: StringWithAggregatesFilter<"Appointment"> | string
    appointmentDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    isActive?: BoolWithAggregatesFilter<"Appointment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
  }

  export type BookAppointmentWhereInput = {
    AND?: BookAppointmentWhereInput | BookAppointmentWhereInput[]
    OR?: BookAppointmentWhereInput[]
    NOT?: BookAppointmentWhereInput | BookAppointmentWhereInput[]
    id?: StringFilter<"BookAppointment"> | string
    doctorId?: StringFilter<"BookAppointment"> | string
    locationId?: StringFilter<"BookAppointment"> | string
    appointmentId?: StringFilter<"BookAppointment"> | string
    date?: DateTimeFilter<"BookAppointment"> | Date | string
    day?: StringNullableFilter<"BookAppointment"> | string | null
    startTime?: StringNullableFilter<"BookAppointment"> | string | null
    endTime?: StringNullableFilter<"BookAppointment"> | string | null
    status?: StringNullableFilter<"BookAppointment"> | string | null
    isActive?: BoolFilter<"BookAppointment"> | boolean
    createdAt?: DateTimeFilter<"BookAppointment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BookAppointment"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type BookAppointmentOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    appointmentId?: SortOrder
    date?: SortOrder
    day?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    doctor?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: BookAppointmentOrderByRelevanceInput
  }

  export type BookAppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookAppointmentWhereInput | BookAppointmentWhereInput[]
    OR?: BookAppointmentWhereInput[]
    NOT?: BookAppointmentWhereInput | BookAppointmentWhereInput[]
    doctorId?: StringFilter<"BookAppointment"> | string
    locationId?: StringFilter<"BookAppointment"> | string
    appointmentId?: StringFilter<"BookAppointment"> | string
    date?: DateTimeFilter<"BookAppointment"> | Date | string
    day?: StringNullableFilter<"BookAppointment"> | string | null
    startTime?: StringNullableFilter<"BookAppointment"> | string | null
    endTime?: StringNullableFilter<"BookAppointment"> | string | null
    status?: StringNullableFilter<"BookAppointment"> | string | null
    isActive?: BoolFilter<"BookAppointment"> | boolean
    createdAt?: DateTimeFilter<"BookAppointment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BookAppointment"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type BookAppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    appointmentId?: SortOrder
    date?: SortOrder
    day?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: BookAppointmentCountOrderByAggregateInput
    _max?: BookAppointmentMaxOrderByAggregateInput
    _min?: BookAppointmentMinOrderByAggregateInput
  }

  export type BookAppointmentScalarWhereWithAggregatesInput = {
    AND?: BookAppointmentScalarWhereWithAggregatesInput | BookAppointmentScalarWhereWithAggregatesInput[]
    OR?: BookAppointmentScalarWhereWithAggregatesInput[]
    NOT?: BookAppointmentScalarWhereWithAggregatesInput | BookAppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookAppointment"> | string
    doctorId?: StringWithAggregatesFilter<"BookAppointment"> | string
    locationId?: StringWithAggregatesFilter<"BookAppointment"> | string
    appointmentId?: StringWithAggregatesFilter<"BookAppointment"> | string
    date?: DateTimeWithAggregatesFilter<"BookAppointment"> | Date | string
    day?: StringNullableWithAggregatesFilter<"BookAppointment"> | string | null
    startTime?: StringNullableWithAggregatesFilter<"BookAppointment"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"BookAppointment"> | string | null
    status?: StringNullableWithAggregatesFilter<"BookAppointment"> | string | null
    isActive?: BoolWithAggregatesFilter<"BookAppointment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BookAppointment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"BookAppointment"> | Date | string | null
  }

  export type AppointmentSlotWhereInput = {
    AND?: AppointmentSlotWhereInput | AppointmentSlotWhereInput[]
    OR?: AppointmentSlotWhereInput[]
    NOT?: AppointmentSlotWhereInput | AppointmentSlotWhereInput[]
    id?: StringFilter<"AppointmentSlot"> | string
    doctorId?: StringFilter<"AppointmentSlot"> | string
    locationId?: StringFilter<"AppointmentSlot"> | string
    day?: StringNullableFilter<"AppointmentSlot"> | string | null
    startTime?: StringNullableFilter<"AppointmentSlot"> | string | null
    endTime?: StringNullableFilter<"AppointmentSlot"> | string | null
    appointmentSlotDuration?: IntNullableFilter<"AppointmentSlot"> | number | null
    totalAppointmentSlots?: IntNullableFilter<"AppointmentSlot"> | number | null
    isActive?: BoolFilter<"AppointmentSlot"> | boolean
    createdAt?: DateTimeFilter<"AppointmentSlot"> | Date | string
    updatedAt?: DateTimeNullableFilter<"AppointmentSlot"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type AppointmentSlotOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    day?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    appointmentSlotDuration?: SortOrderInput | SortOrder
    totalAppointmentSlots?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    doctor?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    _relevance?: AppointmentSlotOrderByRelevanceInput
  }

  export type AppointmentSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentSlotWhereInput | AppointmentSlotWhereInput[]
    OR?: AppointmentSlotWhereInput[]
    NOT?: AppointmentSlotWhereInput | AppointmentSlotWhereInput[]
    doctorId?: StringFilter<"AppointmentSlot"> | string
    locationId?: StringFilter<"AppointmentSlot"> | string
    day?: StringNullableFilter<"AppointmentSlot"> | string | null
    startTime?: StringNullableFilter<"AppointmentSlot"> | string | null
    endTime?: StringNullableFilter<"AppointmentSlot"> | string | null
    appointmentSlotDuration?: IntNullableFilter<"AppointmentSlot"> | number | null
    totalAppointmentSlots?: IntNullableFilter<"AppointmentSlot"> | number | null
    isActive?: BoolFilter<"AppointmentSlot"> | boolean
    createdAt?: DateTimeFilter<"AppointmentSlot"> | Date | string
    updatedAt?: DateTimeNullableFilter<"AppointmentSlot"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type AppointmentSlotOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    day?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    appointmentSlotDuration?: SortOrderInput | SortOrder
    totalAppointmentSlots?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AppointmentSlotCountOrderByAggregateInput
    _avg?: AppointmentSlotAvgOrderByAggregateInput
    _max?: AppointmentSlotMaxOrderByAggregateInput
    _min?: AppointmentSlotMinOrderByAggregateInput
    _sum?: AppointmentSlotSumOrderByAggregateInput
  }

  export type AppointmentSlotScalarWhereWithAggregatesInput = {
    AND?: AppointmentSlotScalarWhereWithAggregatesInput | AppointmentSlotScalarWhereWithAggregatesInput[]
    OR?: AppointmentSlotScalarWhereWithAggregatesInput[]
    NOT?: AppointmentSlotScalarWhereWithAggregatesInput | AppointmentSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointmentSlot"> | string
    doctorId?: StringWithAggregatesFilter<"AppointmentSlot"> | string
    locationId?: StringWithAggregatesFilter<"AppointmentSlot"> | string
    day?: StringNullableWithAggregatesFilter<"AppointmentSlot"> | string | null
    startTime?: StringNullableWithAggregatesFilter<"AppointmentSlot"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"AppointmentSlot"> | string | null
    appointmentSlotDuration?: IntNullableWithAggregatesFilter<"AppointmentSlot"> | number | null
    totalAppointmentSlots?: IntNullableWithAggregatesFilter<"AppointmentSlot"> | number | null
    isActive?: BoolWithAggregatesFilter<"AppointmentSlot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AppointmentSlot"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AppointmentSlot"> | Date | string | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    doctorId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringNullableFilter<"Location"> | string | null
    city?: StringNullableFilter<"Location"> | string | null
    state?: StringNullableFilter<"Location"> | string | null
    country?: StringNullableFilter<"Location"> | string | null
    zipCode?: StringNullableFilter<"Location"> | string | null
    phone?: StringNullableFilter<"Location"> | string | null
    isLocationVerified?: BoolFilter<"Location"> | boolean
    verifiedBy?: StringNullableFilter<"Location"> | string | null
    isActive?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: AppointmentListRelationFilter
    bookAppointment?: BookAppointmentListRelationFilter
    appointmentSlot?: AppointmentSlotListRelationFilter
    service?: ServiceListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isLocationVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    doctor?: UserOrderByWithRelationInput
    appointment?: AppointmentOrderByRelationAggregateInput
    bookAppointment?: BookAppointmentOrderByRelationAggregateInput
    appointmentSlot?: AppointmentSlotOrderByRelationAggregateInput
    service?: ServiceOrderByRelationAggregateInput
    _relevance?: LocationOrderByRelevanceInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    doctorId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringNullableFilter<"Location"> | string | null
    city?: StringNullableFilter<"Location"> | string | null
    state?: StringNullableFilter<"Location"> | string | null
    country?: StringNullableFilter<"Location"> | string | null
    zipCode?: StringNullableFilter<"Location"> | string | null
    phone?: StringNullableFilter<"Location"> | string | null
    isLocationVerified?: BoolFilter<"Location"> | boolean
    verifiedBy?: StringNullableFilter<"Location"> | string | null
    isActive?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: AppointmentListRelationFilter
    bookAppointment?: BookAppointmentListRelationFilter
    appointmentSlot?: AppointmentSlotListRelationFilter
    service?: ServiceListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isLocationVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    doctorId?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    address?: StringNullableWithAggregatesFilter<"Location"> | string | null
    city?: StringNullableWithAggregatesFilter<"Location"> | string | null
    state?: StringNullableWithAggregatesFilter<"Location"> | string | null
    country?: StringNullableWithAggregatesFilter<"Location"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Location"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Location"> | string | null
    isLocationVerified?: BoolWithAggregatesFilter<"Location"> | boolean
    verifiedBy?: StringNullableWithAggregatesFilter<"Location"> | string | null
    isActive?: BoolWithAggregatesFilter<"Location"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Location"> | Date | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    doctorId?: StringFilter<"Service"> | string
    locationId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointment?: AppointmentListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    doctor?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    appointment?: AppointmentOrderByRelationAggregateInput
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    doctorId?: StringFilter<"Service"> | string
    locationId?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointment?: AppointmentListRelationFilter
  }, "id" | "name">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    doctorId?: StringWithAggregatesFilter<"Service"> | string
    locationId?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    price?: DecimalWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    appointmentId?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    currencyCode?: StringNullableFilter<"Payment"> | string | null
    isActive?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    currencyCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    appointmentId?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    currencyCode?: StringNullableFilter<"Payment"> | string | null
    isActive?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    currencyCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    appointmentId?: StringWithAggregatesFilter<"Payment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    paymentMethod?: StringWithAggregatesFilter<"Payment"> | string
    currencyCode?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    isActive?: BoolWithAggregatesFilter<"Payment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type SpecializationWhereInput = {
    AND?: SpecializationWhereInput | SpecializationWhereInput[]
    OR?: SpecializationWhereInput[]
    NOT?: SpecializationWhereInput | SpecializationWhereInput[]
    id?: StringFilter<"Specialization"> | string
    name?: StringFilter<"Specialization"> | string
    description?: StringNullableFilter<"Specialization"> | string | null
    isActive?: BoolFilter<"Specialization"> | boolean
    createdAt?: DateTimeFilter<"Specialization"> | Date | string
    updatedAt?: DateTimeFilter<"Specialization"> | Date | string
  }

  export type SpecializationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SpecializationOrderByRelevanceInput
  }

  export type SpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecializationWhereInput | SpecializationWhereInput[]
    OR?: SpecializationWhereInput[]
    NOT?: SpecializationWhereInput | SpecializationWhereInput[]
    name?: StringFilter<"Specialization"> | string
    description?: StringNullableFilter<"Specialization"> | string | null
    isActive?: BoolFilter<"Specialization"> | boolean
    createdAt?: DateTimeFilter<"Specialization"> | Date | string
    updatedAt?: DateTimeFilter<"Specialization"> | Date | string
  }, "id">

  export type SpecializationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecializationCountOrderByAggregateInput
    _max?: SpecializationMaxOrderByAggregateInput
    _min?: SpecializationMinOrderByAggregateInput
  }

  export type SpecializationScalarWhereWithAggregatesInput = {
    AND?: SpecializationScalarWhereWithAggregatesInput | SpecializationScalarWhereWithAggregatesInput[]
    OR?: SpecializationScalarWhereWithAggregatesInput[]
    NOT?: SpecializationScalarWhereWithAggregatesInput | SpecializationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specialization"> | string
    name?: StringWithAggregatesFilter<"Specialization"> | string
    description?: StringNullableWithAggregatesFilter<"Specialization"> | string | null
    isActive?: BoolWithAggregatesFilter<"Specialization"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Specialization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Specialization"> | Date | string
  }

  export type DoctorProfileWhereInput = {
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    id?: StringFilter<"DoctorProfile"> | string
    userId?: StringFilter<"DoctorProfile"> | string
    fullName?: StringFilter<"DoctorProfile"> | string
    bio?: StringNullableFilter<"DoctorProfile"> | string | null
    website?: StringNullableFilter<"DoctorProfile"> | string | null
    overallRating?: DecimalFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    profileImageUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    documentUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    resumeUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    isVerified?: BoolFilter<"DoctorProfile"> | boolean
    verifiedBy?: StringNullableFilter<"DoctorProfile"> | string | null
    isActive?: BoolFilter<"DoctorProfile"> | boolean
    createdAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorProfile"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: AppointmentListRelationFilter
    doctorSpecialization?: DoctorSpecializationListRelationFilter
    doctorRating?: DoctorRatingListRelationFilter
  }

  export type DoctorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bio?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    overallRating?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointment?: AppointmentOrderByRelationAggregateInput
    doctorSpecialization?: DoctorSpecializationOrderByRelationAggregateInput
    doctorRating?: DoctorRatingOrderByRelationAggregateInput
    _relevance?: DoctorProfileOrderByRelevanceInput
  }

  export type DoctorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    userId?: StringFilter<"DoctorProfile"> | string
    fullName?: StringFilter<"DoctorProfile"> | string
    bio?: StringNullableFilter<"DoctorProfile"> | string | null
    website?: StringNullableFilter<"DoctorProfile"> | string | null
    overallRating?: DecimalFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    profileImageUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    documentUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    resumeUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    isVerified?: BoolFilter<"DoctorProfile"> | boolean
    verifiedBy?: StringNullableFilter<"DoctorProfile"> | string | null
    isActive?: BoolFilter<"DoctorProfile"> | boolean
    createdAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorProfile"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: AppointmentListRelationFilter
    doctorSpecialization?: DoctorSpecializationListRelationFilter
    doctorRating?: DoctorRatingListRelationFilter
  }, "id">

  export type DoctorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bio?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    overallRating?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: DoctorProfileCountOrderByAggregateInput
    _avg?: DoctorProfileAvgOrderByAggregateInput
    _max?: DoctorProfileMaxOrderByAggregateInput
    _min?: DoctorProfileMinOrderByAggregateInput
    _sum?: DoctorProfileSumOrderByAggregateInput
  }

  export type DoctorProfileScalarWhereWithAggregatesInput = {
    AND?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    OR?: DoctorProfileScalarWhereWithAggregatesInput[]
    NOT?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorProfile"> | string
    userId?: StringWithAggregatesFilter<"DoctorProfile"> | string
    fullName?: StringWithAggregatesFilter<"DoctorProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
    overallRating?: DecimalWithAggregatesFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
    documentUrl?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
    isVerified?: BoolWithAggregatesFilter<"DoctorProfile"> | boolean
    verifiedBy?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
    isActive?: BoolWithAggregatesFilter<"DoctorProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DoctorProfile"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"DoctorProfile"> | Date | string | null
  }

  export type DoctorSpecializationWhereInput = {
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    id?: StringFilter<"DoctorSpecialization"> | string
    doctorProfileId?: StringFilter<"DoctorSpecialization"> | string
    specialization?: StringFilter<"DoctorSpecialization"> | string
    documentUrl?: StringNullableFilter<"DoctorSpecialization"> | string | null
    isVerified?: BoolFilter<"DoctorSpecialization"> | boolean
    verifiedBy?: StringNullableFilter<"DoctorSpecialization"> | string | null
    isActive?: BoolFilter<"DoctorSpecialization"> | boolean
    createdAt?: DateTimeFilter<"DoctorSpecialization"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorSpecialization"> | Date | string | null
    doctorProfile?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }

  export type DoctorSpecializationOrderByWithRelationInput = {
    id?: SortOrder
    doctorProfileId?: SortOrder
    specialization?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    doctorProfile?: DoctorProfileOrderByWithRelationInput
    _relevance?: DoctorSpecializationOrderByRelevanceInput
  }

  export type DoctorSpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    doctorProfileId?: StringFilter<"DoctorSpecialization"> | string
    specialization?: StringFilter<"DoctorSpecialization"> | string
    documentUrl?: StringNullableFilter<"DoctorSpecialization"> | string | null
    isVerified?: BoolFilter<"DoctorSpecialization"> | boolean
    verifiedBy?: StringNullableFilter<"DoctorSpecialization"> | string | null
    isActive?: BoolFilter<"DoctorSpecialization"> | boolean
    createdAt?: DateTimeFilter<"DoctorSpecialization"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorSpecialization"> | Date | string | null
    doctorProfile?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }, "id">

  export type DoctorSpecializationOrderByWithAggregationInput = {
    id?: SortOrder
    doctorProfileId?: SortOrder
    specialization?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: DoctorSpecializationCountOrderByAggregateInput
    _max?: DoctorSpecializationMaxOrderByAggregateInput
    _min?: DoctorSpecializationMinOrderByAggregateInput
  }

  export type DoctorSpecializationScalarWhereWithAggregatesInput = {
    AND?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    OR?: DoctorSpecializationScalarWhereWithAggregatesInput[]
    NOT?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    doctorProfileId?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    specialization?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    documentUrl?: StringNullableWithAggregatesFilter<"DoctorSpecialization"> | string | null
    isVerified?: BoolWithAggregatesFilter<"DoctorSpecialization"> | boolean
    verifiedBy?: StringNullableWithAggregatesFilter<"DoctorSpecialization"> | string | null
    isActive?: BoolWithAggregatesFilter<"DoctorSpecialization"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DoctorSpecialization"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"DoctorSpecialization"> | Date | string | null
  }

  export type DoctorRatingWhereInput = {
    AND?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    OR?: DoctorRatingWhereInput[]
    NOT?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    id?: StringFilter<"DoctorRating"> | string
    doctorId?: StringFilter<"DoctorRating"> | string
    doctorProfileId?: StringFilter<"DoctorRating"> | string
    appointmentId?: StringFilter<"DoctorRating"> | string
    review?: StringFilter<"DoctorRating"> | string
    rating?: DecimalFilter<"DoctorRating"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DoctorRating"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorRating"> | Date | string | null
    isActive?: BoolFilter<"DoctorRating"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorProfile?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type DoctorRatingOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    doctorProfileId?: SortOrder
    appointmentId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    doctorProfile?: DoctorProfileOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: DoctorRatingOrderByRelevanceInput
  }

  export type DoctorRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    OR?: DoctorRatingWhereInput[]
    NOT?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    doctorId?: StringFilter<"DoctorRating"> | string
    doctorProfileId?: StringFilter<"DoctorRating"> | string
    appointmentId?: StringFilter<"DoctorRating"> | string
    review?: StringFilter<"DoctorRating"> | string
    rating?: DecimalFilter<"DoctorRating"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DoctorRating"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorRating"> | Date | string | null
    isActive?: BoolFilter<"DoctorRating"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorProfile?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type DoctorRatingOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    doctorProfileId?: SortOrder
    appointmentId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: DoctorRatingCountOrderByAggregateInput
    _avg?: DoctorRatingAvgOrderByAggregateInput
    _max?: DoctorRatingMaxOrderByAggregateInput
    _min?: DoctorRatingMinOrderByAggregateInput
    _sum?: DoctorRatingSumOrderByAggregateInput
  }

  export type DoctorRatingScalarWhereWithAggregatesInput = {
    AND?: DoctorRatingScalarWhereWithAggregatesInput | DoctorRatingScalarWhereWithAggregatesInput[]
    OR?: DoctorRatingScalarWhereWithAggregatesInput[]
    NOT?: DoctorRatingScalarWhereWithAggregatesInput | DoctorRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorRating"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorRating"> | string
    doctorProfileId?: StringWithAggregatesFilter<"DoctorRating"> | string
    appointmentId?: StringWithAggregatesFilter<"DoctorRating"> | string
    review?: StringWithAggregatesFilter<"DoctorRating"> | string
    rating?: DecimalWithAggregatesFilter<"DoctorRating"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DoctorRating"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"DoctorRating"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"DoctorRating"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    isPhoneVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    timezone?: StringNullableFilter<"User"> | string | null
    locale?: StringNullableFilter<"User"> | string | null
    metadata?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    roles?: UserRoleListRelationFilter
    appointments?: AppointmentListRelationFilter
    bookAppointments?: BookAppointmentListRelationFilter
    appointmentSlots?: AppointmentSlotListRelationFilter
    locations?: LocationListRelationFilter
    services?: ServiceListRelationFilter
    doctorProfiles?: DoctorProfileListRelationFilter
    doctorRatings?: DoctorRatingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    bookAppointments?: BookAppointmentOrderByRelationAggregateInput
    appointmentSlots?: AppointmentSlotOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    doctorProfiles?: DoctorProfileOrderByRelationAggregateInput
    doctorRatings?: DoctorRatingOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    isPhoneVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    timezone?: StringNullableFilter<"User"> | string | null
    locale?: StringNullableFilter<"User"> | string | null
    metadata?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    roles?: UserRoleListRelationFilter
    appointments?: AppointmentListRelationFilter
    bookAppointments?: BookAppointmentListRelationFilter
    appointmentSlots?: AppointmentSlotListRelationFilter
    locations?: LocationListRelationFilter
    services?: ServiceListRelationFilter
    doctorProfiles?: DoctorProfileListRelationFilter
    doctorRatings?: DoctorRatingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isPhoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    timezone?: StringNullableWithAggregatesFilter<"User"> | string | null
    locale?: StringNullableWithAggregatesFilter<"User"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    isActive?: BoolFilter<"Role"> | boolean
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    isActive?: BoolFilter<"Role"> | boolean
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    isActive?: BoolWithAggregatesFilter<"Role"> | boolean
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: UserRoleOrderByRelevanceInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type AppointmentCreateInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutAppointmentInput
    location: LocationCreateNestedOneWithoutAppointmentInput
    service: ServiceCreateNestedOneWithoutAppointmentInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutAppointmentInput
    payment?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    userId: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    userId: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentCreateInput = {
    id?: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutBookAppointmentsInput
    location: LocationCreateNestedOneWithoutBookAppointmentInput
    appointment: AppointmentCreateNestedOneWithoutBookAppointmentInput
  }

  export type BookAppointmentUncheckedCreateInput = {
    id?: string
    doctorId: string
    locationId: string
    appointmentId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookAppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutBookAppointmentsNestedInput
    location?: LocationUpdateOneRequiredWithoutBookAppointmentNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutBookAppointmentNestedInput
  }

  export type BookAppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentCreateManyInput = {
    id?: string
    doctorId: string
    locationId: string
    appointmentId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookAppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentSlotCreateInput = {
    id?: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutAppointmentSlotsInput
    location: LocationCreateNestedOneWithoutAppointmentSlotInput
  }

  export type AppointmentSlotUncheckedCreateInput = {
    id?: string
    doctorId: string
    locationId: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutAppointmentSlotsNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentSlotNestedInput
  }

  export type AppointmentSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentSlotCreateManyInput = {
    id?: string
    doctorId: string
    locationId: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutLocationsInput
    appointment?: AppointmentCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotCreateNestedManyWithoutLocationInput
    service?: ServiceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    doctorId: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotUncheckedCreateNestedManyWithoutLocationInput
    service?: ServiceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutLocationsNestedInput
    appointment?: AppointmentUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUpdateManyWithoutLocationNestedInput
    service?: ServiceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUncheckedUpdateManyWithoutLocationNestedInput
    service?: ServiceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    doctorId: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutServicesInput
    location: LocationCreateNestedOneWithoutServiceInput
    appointment?: AppointmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    doctorId: string
    locationId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutServicesNestedInput
    location?: LocationUpdateOneRequiredWithoutServiceNestedInput
    appointment?: AppointmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    doctorId: string
    locationId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status: string
    paymentMethod: string
    currencyCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment: AppointmentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    appointmentId: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status: string
    paymentMethod: string
    currencyCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    appointmentId: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status: string
    paymentMethod: string
    currencyCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpecializationCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecializationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecializationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecializationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecializationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecializationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecializationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorProfileCreateInput = {
    id?: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutDoctorProfilesInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorProfileInput
    doctorSpecialization?: DoctorSpecializationCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorProfileInput
    doctorSpecialization?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDoctorProfilesNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorProfileNestedInput
    doctorSpecialization?: DoctorSpecializationUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorProfileNestedInput
    doctorSpecialization?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileCreateManyInput = {
    id?: string
    userId: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorSpecializationCreateInput = {
    id?: string
    specialization: string
    documentUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorProfile: DoctorProfileCreateNestedOneWithoutDoctorSpecializationInput
  }

  export type DoctorSpecializationUncheckedCreateInput = {
    id?: string
    doctorProfileId: string
    specialization: string
    documentUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorSpecializationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutDoctorSpecializationNestedInput
  }

  export type DoctorSpecializationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorSpecializationCreateManyInput = {
    id?: string
    doctorProfileId: string
    specialization: string
    documentUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorSpecializationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorSpecializationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorRatingCreateInput = {
    id?: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutDoctorRatingsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutDoctorRatingInput
    appointment: AppointmentCreateNestedOneWithoutDoctorRatingInput
  }

  export type DoctorRatingUncheckedCreateInput = {
    id?: string
    doctorId: string
    doctorProfileId: string
    appointmentId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type DoctorRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDoctorRatingsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutDoctorRatingNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutDoctorRatingNestedInput
  }

  export type DoctorRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorRatingCreateManyInput = {
    id?: string
    doctorId: string
    doctorProfileId: string
    appointmentId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type DoctorRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DoctorProfileScalarRelationFilter = {
    is?: DoctorProfileWhereInput
    isNot?: DoctorProfileWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type DoctorRatingListRelationFilter = {
    every?: DoctorRatingWhereInput
    some?: DoctorRatingWhereInput
    none?: DoctorRatingWhereInput
  }

  export type BookAppointmentListRelationFilter = {
    every?: BookAppointmentWhereInput
    some?: BookAppointmentWhereInput
    none?: BookAppointmentWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DoctorRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookAppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelevanceInput = {
    fields: AppointmentOrderByRelevanceFieldEnum | AppointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorProfileId?: SortOrder
    locationId?: SortOrder
    serviceId?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorProfileId?: SortOrder
    locationId?: SortOrder
    serviceId?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    doctorProfileId?: SortOrder
    locationId?: SortOrder
    serviceId?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type BookAppointmentOrderByRelevanceInput = {
    fields: BookAppointmentOrderByRelevanceFieldEnum | BookAppointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookAppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    appointmentId?: SortOrder
    date?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookAppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    appointmentId?: SortOrder
    date?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookAppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    appointmentId?: SortOrder
    date?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AppointmentSlotOrderByRelevanceInput = {
    fields: AppointmentSlotOrderByRelevanceFieldEnum | AppointmentSlotOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentSlotCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    appointmentSlotDuration?: SortOrder
    totalAppointmentSlots?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSlotAvgOrderByAggregateInput = {
    appointmentSlotDuration?: SortOrder
    totalAppointmentSlots?: SortOrder
  }

  export type AppointmentSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    appointmentSlotDuration?: SortOrder
    totalAppointmentSlots?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSlotMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    appointmentSlotDuration?: SortOrder
    totalAppointmentSlots?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSlotSumOrderByAggregateInput = {
    appointmentSlotDuration?: SortOrder
    totalAppointmentSlots?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type AppointmentSlotListRelationFilter = {
    every?: AppointmentSlotWhereInput
    some?: AppointmentSlotWhereInput
    none?: AppointmentSlotWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelevanceInput = {
    fields: LocationOrderByRelevanceFieldEnum | LocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    isLocationVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    isLocationVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    isLocationVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    currencyCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    currencyCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    currencyCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SpecializationOrderByRelevanceInput = {
    fields: SpecializationOrderByRelevanceFieldEnum | SpecializationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SpecializationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecializationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecializationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSpecializationListRelationFilter = {
    every?: DoctorSpecializationWhereInput
    some?: DoctorSpecializationWhereInput
    none?: DoctorSpecializationWhereInput
  }

  export type DoctorSpecializationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorProfileOrderByRelevanceInput = {
    fields: DoctorProfileOrderByRelevanceFieldEnum | DoctorProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    overallRating?: SortOrder
    profileImageUrl?: SortOrder
    documentUrl?: SortOrder
    resumeUrl?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorProfileAvgOrderByAggregateInput = {
    overallRating?: SortOrder
  }

  export type DoctorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    overallRating?: SortOrder
    profileImageUrl?: SortOrder
    documentUrl?: SortOrder
    resumeUrl?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    overallRating?: SortOrder
    profileImageUrl?: SortOrder
    documentUrl?: SortOrder
    resumeUrl?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorProfileSumOrderByAggregateInput = {
    overallRating?: SortOrder
  }

  export type DoctorSpecializationOrderByRelevanceInput = {
    fields: DoctorSpecializationOrderByRelevanceFieldEnum | DoctorSpecializationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorSpecializationCountOrderByAggregateInput = {
    id?: SortOrder
    doctorProfileId?: SortOrder
    specialization?: SortOrder
    documentUrl?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSpecializationMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorProfileId?: SortOrder
    specialization?: SortOrder
    documentUrl?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSpecializationMinOrderByAggregateInput = {
    id?: SortOrder
    doctorProfileId?: SortOrder
    specialization?: SortOrder
    documentUrl?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorRatingOrderByRelevanceInput = {
    fields: DoctorRatingOrderByRelevanceFieldEnum | DoctorRatingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorRatingCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    doctorProfileId?: SortOrder
    appointmentId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type DoctorRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type DoctorRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    doctorProfileId?: SortOrder
    appointmentId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type DoctorRatingMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    doctorProfileId?: SortOrder
    appointmentId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type DoctorRatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type DoctorProfileListRelationFilter = {
    every?: DoctorProfileWhereInput
    some?: DoctorProfileWhereInput
    none?: DoctorProfileWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    displayName?: SortOrder
    phoneNumber?: SortOrder
    profileImageUrl?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    locale?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    displayName?: SortOrder
    phoneNumber?: SortOrder
    profileImageUrl?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    locale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    displayName?: SortOrder
    phoneNumber?: SortOrder
    profileImageUrl?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    locale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleOrderByRelevanceInput = {
    fields: UserRoleOrderByRelevanceFieldEnum | UserRoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorProfileCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<DoctorProfileCreateWithoutAppointmentInput, DoctorProfileUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAppointmentInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<LocationCreateWithoutAppointmentInput, LocationUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAppointmentInput
    connect?: LocationWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentInput
    connect?: ServiceWhereUniqueInput
  }

  export type DoctorRatingCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<DoctorRatingCreateWithoutAppointmentInput, DoctorRatingUncheckedCreateWithoutAppointmentInput> | DoctorRatingCreateWithoutAppointmentInput[] | DoctorRatingUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutAppointmentInput | DoctorRatingCreateOrConnectWithoutAppointmentInput[]
    createMany?: DoctorRatingCreateManyAppointmentInputEnvelope
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
  }

  export type BookAppointmentCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<BookAppointmentCreateWithoutAppointmentInput, BookAppointmentUncheckedCreateWithoutAppointmentInput> | BookAppointmentCreateWithoutAppointmentInput[] | BookAppointmentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutAppointmentInput | BookAppointmentCreateOrConnectWithoutAppointmentInput[]
    createMany?: BookAppointmentCreateManyAppointmentInputEnvelope
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<DoctorRatingCreateWithoutAppointmentInput, DoctorRatingUncheckedCreateWithoutAppointmentInput> | DoctorRatingCreateWithoutAppointmentInput[] | DoctorRatingUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutAppointmentInput | DoctorRatingCreateOrConnectWithoutAppointmentInput[]
    createMany?: DoctorRatingCreateManyAppointmentInputEnvelope
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
  }

  export type BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<BookAppointmentCreateWithoutAppointmentInput, BookAppointmentUncheckedCreateWithoutAppointmentInput> | BookAppointmentCreateWithoutAppointmentInput[] | BookAppointmentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutAppointmentInput | BookAppointmentCreateOrConnectWithoutAppointmentInput[]
    createMany?: BookAppointmentCreateManyAppointmentInputEnvelope
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutAppointmentInput, DoctorProfileUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAppointmentInput
    upsert?: DoctorProfileUpsertWithoutAppointmentInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutAppointmentInput, DoctorProfileUpdateWithoutAppointmentInput>, DoctorProfileUncheckedUpdateWithoutAppointmentInput>
  }

  export type LocationUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<LocationCreateWithoutAppointmentInput, LocationUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAppointmentInput
    upsert?: LocationUpsertWithoutAppointmentInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutAppointmentInput, LocationUpdateWithoutAppointmentInput>, LocationUncheckedUpdateWithoutAppointmentInput>
  }

  export type ServiceUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentInput
    upsert?: ServiceUpsertWithoutAppointmentInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAppointmentInput, ServiceUpdateWithoutAppointmentInput>, ServiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorRatingUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<DoctorRatingCreateWithoutAppointmentInput, DoctorRatingUncheckedCreateWithoutAppointmentInput> | DoctorRatingCreateWithoutAppointmentInput[] | DoctorRatingUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutAppointmentInput | DoctorRatingCreateOrConnectWithoutAppointmentInput[]
    upsert?: DoctorRatingUpsertWithWhereUniqueWithoutAppointmentInput | DoctorRatingUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: DoctorRatingCreateManyAppointmentInputEnvelope
    set?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    disconnect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    delete?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    update?: DoctorRatingUpdateWithWhereUniqueWithoutAppointmentInput | DoctorRatingUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: DoctorRatingUpdateManyWithWhereWithoutAppointmentInput | DoctorRatingUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
  }

  export type BookAppointmentUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<BookAppointmentCreateWithoutAppointmentInput, BookAppointmentUncheckedCreateWithoutAppointmentInput> | BookAppointmentCreateWithoutAppointmentInput[] | BookAppointmentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutAppointmentInput | BookAppointmentCreateOrConnectWithoutAppointmentInput[]
    upsert?: BookAppointmentUpsertWithWhereUniqueWithoutAppointmentInput | BookAppointmentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: BookAppointmentCreateManyAppointmentInputEnvelope
    set?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    disconnect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    delete?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    update?: BookAppointmentUpdateWithWhereUniqueWithoutAppointmentInput | BookAppointmentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: BookAppointmentUpdateManyWithWhereWithoutAppointmentInput | BookAppointmentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<DoctorRatingCreateWithoutAppointmentInput, DoctorRatingUncheckedCreateWithoutAppointmentInput> | DoctorRatingCreateWithoutAppointmentInput[] | DoctorRatingUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutAppointmentInput | DoctorRatingCreateOrConnectWithoutAppointmentInput[]
    upsert?: DoctorRatingUpsertWithWhereUniqueWithoutAppointmentInput | DoctorRatingUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: DoctorRatingCreateManyAppointmentInputEnvelope
    set?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    disconnect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    delete?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    update?: DoctorRatingUpdateWithWhereUniqueWithoutAppointmentInput | DoctorRatingUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: DoctorRatingUpdateManyWithWhereWithoutAppointmentInput | DoctorRatingUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
  }

  export type BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<BookAppointmentCreateWithoutAppointmentInput, BookAppointmentUncheckedCreateWithoutAppointmentInput> | BookAppointmentCreateWithoutAppointmentInput[] | BookAppointmentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutAppointmentInput | BookAppointmentCreateOrConnectWithoutAppointmentInput[]
    upsert?: BookAppointmentUpsertWithWhereUniqueWithoutAppointmentInput | BookAppointmentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: BookAppointmentCreateManyAppointmentInputEnvelope
    set?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    disconnect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    delete?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    update?: BookAppointmentUpdateWithWhereUniqueWithoutAppointmentInput | BookAppointmentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: BookAppointmentUpdateManyWithWhereWithoutAppointmentInput | BookAppointmentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookAppointmentsInput = {
    create?: XOR<UserCreateWithoutBookAppointmentsInput, UserUncheckedCreateWithoutBookAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutBookAppointmentInput = {
    create?: XOR<LocationCreateWithoutBookAppointmentInput, LocationUncheckedCreateWithoutBookAppointmentInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBookAppointmentInput
    connect?: LocationWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutBookAppointmentInput = {
    create?: XOR<AppointmentCreateWithoutBookAppointmentInput, AppointmentUncheckedCreateWithoutBookAppointmentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutBookAppointmentInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutBookAppointmentsInput, UserUncheckedCreateWithoutBookAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookAppointmentsInput
    upsert?: UserUpsertWithoutBookAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookAppointmentsInput, UserUpdateWithoutBookAppointmentsInput>, UserUncheckedUpdateWithoutBookAppointmentsInput>
  }

  export type LocationUpdateOneRequiredWithoutBookAppointmentNestedInput = {
    create?: XOR<LocationCreateWithoutBookAppointmentInput, LocationUncheckedCreateWithoutBookAppointmentInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBookAppointmentInput
    upsert?: LocationUpsertWithoutBookAppointmentInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutBookAppointmentInput, LocationUpdateWithoutBookAppointmentInput>, LocationUncheckedUpdateWithoutBookAppointmentInput>
  }

  export type AppointmentUpdateOneRequiredWithoutBookAppointmentNestedInput = {
    create?: XOR<AppointmentCreateWithoutBookAppointmentInput, AppointmentUncheckedCreateWithoutBookAppointmentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutBookAppointmentInput
    upsert?: AppointmentUpsertWithoutBookAppointmentInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutBookAppointmentInput, AppointmentUpdateWithoutBookAppointmentInput>, AppointmentUncheckedUpdateWithoutBookAppointmentInput>
  }

  export type UserCreateNestedOneWithoutAppointmentSlotsInput = {
    create?: XOR<UserCreateWithoutAppointmentSlotsInput, UserUncheckedCreateWithoutAppointmentSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentSlotsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutAppointmentSlotInput = {
    create?: XOR<LocationCreateWithoutAppointmentSlotInput, LocationUncheckedCreateWithoutAppointmentSlotInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAppointmentSlotInput
    connect?: LocationWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAppointmentSlotsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentSlotsInput, UserUncheckedCreateWithoutAppointmentSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentSlotsInput
    upsert?: UserUpsertWithoutAppointmentSlotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentSlotsInput, UserUpdateWithoutAppointmentSlotsInput>, UserUncheckedUpdateWithoutAppointmentSlotsInput>
  }

  export type LocationUpdateOneRequiredWithoutAppointmentSlotNestedInput = {
    create?: XOR<LocationCreateWithoutAppointmentSlotInput, LocationUncheckedCreateWithoutAppointmentSlotInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAppointmentSlotInput
    upsert?: LocationUpsertWithoutAppointmentSlotInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutAppointmentSlotInput, LocationUpdateWithoutAppointmentSlotInput>, LocationUncheckedUpdateWithoutAppointmentSlotInput>
  }

  export type UserCreateNestedOneWithoutLocationsInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutLocationInput = {
    create?: XOR<AppointmentCreateWithoutLocationInput, AppointmentUncheckedCreateWithoutLocationInput> | AppointmentCreateWithoutLocationInput[] | AppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLocationInput | AppointmentCreateOrConnectWithoutLocationInput[]
    createMany?: AppointmentCreateManyLocationInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BookAppointmentCreateNestedManyWithoutLocationInput = {
    create?: XOR<BookAppointmentCreateWithoutLocationInput, BookAppointmentUncheckedCreateWithoutLocationInput> | BookAppointmentCreateWithoutLocationInput[] | BookAppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutLocationInput | BookAppointmentCreateOrConnectWithoutLocationInput[]
    createMany?: BookAppointmentCreateManyLocationInputEnvelope
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
  }

  export type AppointmentSlotCreateNestedManyWithoutLocationInput = {
    create?: XOR<AppointmentSlotCreateWithoutLocationInput, AppointmentSlotUncheckedCreateWithoutLocationInput> | AppointmentSlotCreateWithoutLocationInput[] | AppointmentSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutLocationInput | AppointmentSlotCreateOrConnectWithoutLocationInput[]
    createMany?: AppointmentSlotCreateManyLocationInputEnvelope
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutLocationInput = {
    create?: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput> | ServiceCreateWithoutLocationInput[] | ServiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutLocationInput | ServiceCreateOrConnectWithoutLocationInput[]
    createMany?: ServiceCreateManyLocationInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<AppointmentCreateWithoutLocationInput, AppointmentUncheckedCreateWithoutLocationInput> | AppointmentCreateWithoutLocationInput[] | AppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLocationInput | AppointmentCreateOrConnectWithoutLocationInput[]
    createMany?: AppointmentCreateManyLocationInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BookAppointmentUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<BookAppointmentCreateWithoutLocationInput, BookAppointmentUncheckedCreateWithoutLocationInput> | BookAppointmentCreateWithoutLocationInput[] | BookAppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutLocationInput | BookAppointmentCreateOrConnectWithoutLocationInput[]
    createMany?: BookAppointmentCreateManyLocationInputEnvelope
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
  }

  export type AppointmentSlotUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<AppointmentSlotCreateWithoutLocationInput, AppointmentSlotUncheckedCreateWithoutLocationInput> | AppointmentSlotCreateWithoutLocationInput[] | AppointmentSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutLocationInput | AppointmentSlotCreateOrConnectWithoutLocationInput[]
    createMany?: AppointmentSlotCreateManyLocationInputEnvelope
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput> | ServiceCreateWithoutLocationInput[] | ServiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutLocationInput | ServiceCreateOrConnectWithoutLocationInput[]
    createMany?: ServiceCreateManyLocationInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    upsert?: UserUpsertWithoutLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationsInput, UserUpdateWithoutLocationsInput>, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type AppointmentUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AppointmentCreateWithoutLocationInput, AppointmentUncheckedCreateWithoutLocationInput> | AppointmentCreateWithoutLocationInput[] | AppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLocationInput | AppointmentCreateOrConnectWithoutLocationInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutLocationInput | AppointmentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AppointmentCreateManyLocationInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutLocationInput | AppointmentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutLocationInput | AppointmentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BookAppointmentUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BookAppointmentCreateWithoutLocationInput, BookAppointmentUncheckedCreateWithoutLocationInput> | BookAppointmentCreateWithoutLocationInput[] | BookAppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutLocationInput | BookAppointmentCreateOrConnectWithoutLocationInput[]
    upsert?: BookAppointmentUpsertWithWhereUniqueWithoutLocationInput | BookAppointmentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BookAppointmentCreateManyLocationInputEnvelope
    set?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    disconnect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    delete?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    update?: BookAppointmentUpdateWithWhereUniqueWithoutLocationInput | BookAppointmentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BookAppointmentUpdateManyWithWhereWithoutLocationInput | BookAppointmentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
  }

  export type AppointmentSlotUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AppointmentSlotCreateWithoutLocationInput, AppointmentSlotUncheckedCreateWithoutLocationInput> | AppointmentSlotCreateWithoutLocationInput[] | AppointmentSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutLocationInput | AppointmentSlotCreateOrConnectWithoutLocationInput[]
    upsert?: AppointmentSlotUpsertWithWhereUniqueWithoutLocationInput | AppointmentSlotUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AppointmentSlotCreateManyLocationInputEnvelope
    set?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    disconnect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    delete?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    update?: AppointmentSlotUpdateWithWhereUniqueWithoutLocationInput | AppointmentSlotUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AppointmentSlotUpdateManyWithWhereWithoutLocationInput | AppointmentSlotUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AppointmentSlotScalarWhereInput | AppointmentSlotScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput> | ServiceCreateWithoutLocationInput[] | ServiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutLocationInput | ServiceCreateOrConnectWithoutLocationInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutLocationInput | ServiceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ServiceCreateManyLocationInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutLocationInput | ServiceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutLocationInput | ServiceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AppointmentCreateWithoutLocationInput, AppointmentUncheckedCreateWithoutLocationInput> | AppointmentCreateWithoutLocationInput[] | AppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLocationInput | AppointmentCreateOrConnectWithoutLocationInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutLocationInput | AppointmentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AppointmentCreateManyLocationInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutLocationInput | AppointmentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutLocationInput | AppointmentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BookAppointmentUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BookAppointmentCreateWithoutLocationInput, BookAppointmentUncheckedCreateWithoutLocationInput> | BookAppointmentCreateWithoutLocationInput[] | BookAppointmentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutLocationInput | BookAppointmentCreateOrConnectWithoutLocationInput[]
    upsert?: BookAppointmentUpsertWithWhereUniqueWithoutLocationInput | BookAppointmentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BookAppointmentCreateManyLocationInputEnvelope
    set?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    disconnect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    delete?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    update?: BookAppointmentUpdateWithWhereUniqueWithoutLocationInput | BookAppointmentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BookAppointmentUpdateManyWithWhereWithoutLocationInput | BookAppointmentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
  }

  export type AppointmentSlotUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AppointmentSlotCreateWithoutLocationInput, AppointmentSlotUncheckedCreateWithoutLocationInput> | AppointmentSlotCreateWithoutLocationInput[] | AppointmentSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutLocationInput | AppointmentSlotCreateOrConnectWithoutLocationInput[]
    upsert?: AppointmentSlotUpsertWithWhereUniqueWithoutLocationInput | AppointmentSlotUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AppointmentSlotCreateManyLocationInputEnvelope
    set?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    disconnect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    delete?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    update?: AppointmentSlotUpdateWithWhereUniqueWithoutLocationInput | AppointmentSlotUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AppointmentSlotUpdateManyWithWhereWithoutLocationInput | AppointmentSlotUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AppointmentSlotScalarWhereInput | AppointmentSlotScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput> | ServiceCreateWithoutLocationInput[] | ServiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutLocationInput | ServiceCreateOrConnectWithoutLocationInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutLocationInput | ServiceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ServiceCreateManyLocationInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutLocationInput | ServiceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutLocationInput | ServiceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutServiceInput = {
    create?: XOR<LocationCreateWithoutServiceInput, LocationUncheckedCreateWithoutServiceInput>
    connectOrCreate?: LocationCreateOrConnectWithoutServiceInput
    connect?: LocationWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    upsert?: UserUpsertWithoutServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesInput, UserUpdateWithoutServicesInput>, UserUncheckedUpdateWithoutServicesInput>
  }

  export type LocationUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<LocationCreateWithoutServiceInput, LocationUncheckedCreateWithoutServiceInput>
    connectOrCreate?: LocationCreateOrConnectWithoutServiceInput
    upsert?: LocationUpsertWithoutServiceInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutServiceInput, LocationUpdateWithoutServiceInput>, LocationUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentInput
    connect?: AppointmentWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentInput
    upsert?: AppointmentUpsertWithoutPaymentInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPaymentInput, AppointmentUpdateWithoutPaymentInput>, AppointmentUncheckedUpdateWithoutPaymentInput>
  }

  export type UserCreateNestedOneWithoutDoctorProfilesInput = {
    create?: XOR<UserCreateWithoutDoctorProfilesInput, UserUncheckedCreateWithoutDoctorProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutDoctorProfileInput = {
    create?: XOR<AppointmentCreateWithoutDoctorProfileInput, AppointmentUncheckedCreateWithoutDoctorProfileInput> | AppointmentCreateWithoutDoctorProfileInput[] | AppointmentUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorProfileInput | AppointmentCreateOrConnectWithoutDoctorProfileInput[]
    createMany?: AppointmentCreateManyDoctorProfileInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorSpecializationCreateNestedManyWithoutDoctorProfileInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorProfileInput, DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput> | DoctorSpecializationCreateWithoutDoctorProfileInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput | DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput[]
    createMany?: DoctorSpecializationCreateManyDoctorProfileInputEnvelope
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
  }

  export type DoctorRatingCreateNestedManyWithoutDoctorProfileInput = {
    create?: XOR<DoctorRatingCreateWithoutDoctorProfileInput, DoctorRatingUncheckedCreateWithoutDoctorProfileInput> | DoctorRatingCreateWithoutDoctorProfileInput[] | DoctorRatingUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutDoctorProfileInput | DoctorRatingCreateOrConnectWithoutDoctorProfileInput[]
    createMany?: DoctorRatingCreateManyDoctorProfileInputEnvelope
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorProfileInput = {
    create?: XOR<AppointmentCreateWithoutDoctorProfileInput, AppointmentUncheckedCreateWithoutDoctorProfileInput> | AppointmentCreateWithoutDoctorProfileInput[] | AppointmentUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorProfileInput | AppointmentCreateOrConnectWithoutDoctorProfileInput[]
    createMany?: AppointmentCreateManyDoctorProfileInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorProfileInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorProfileInput, DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput> | DoctorSpecializationCreateWithoutDoctorProfileInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput | DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput[]
    createMany?: DoctorSpecializationCreateManyDoctorProfileInputEnvelope
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
  }

  export type DoctorRatingUncheckedCreateNestedManyWithoutDoctorProfileInput = {
    create?: XOR<DoctorRatingCreateWithoutDoctorProfileInput, DoctorRatingUncheckedCreateWithoutDoctorProfileInput> | DoctorRatingCreateWithoutDoctorProfileInput[] | DoctorRatingUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutDoctorProfileInput | DoctorRatingCreateOrConnectWithoutDoctorProfileInput[]
    createMany?: DoctorRatingCreateManyDoctorProfileInputEnvelope
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDoctorProfilesNestedInput = {
    create?: XOR<UserCreateWithoutDoctorProfilesInput, UserUncheckedCreateWithoutDoctorProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfilesInput
    upsert?: UserUpsertWithoutDoctorProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorProfilesInput, UserUpdateWithoutDoctorProfilesInput>, UserUncheckedUpdateWithoutDoctorProfilesInput>
  }

  export type AppointmentUpdateManyWithoutDoctorProfileNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorProfileInput, AppointmentUncheckedCreateWithoutDoctorProfileInput> | AppointmentCreateWithoutDoctorProfileInput[] | AppointmentUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorProfileInput | AppointmentCreateOrConnectWithoutDoctorProfileInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput | AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput[]
    createMany?: AppointmentCreateManyDoctorProfileInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput | AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorProfileInput | AppointmentUpdateManyWithWhereWithoutDoctorProfileInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorSpecializationUpdateManyWithoutDoctorProfileNestedInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorProfileInput, DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput> | DoctorSpecializationCreateWithoutDoctorProfileInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput | DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput[]
    upsert?: DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorProfileInput | DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorProfileInput[]
    createMany?: DoctorSpecializationCreateManyDoctorProfileInputEnvelope
    set?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    disconnect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    delete?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    update?: DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorProfileInput | DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorProfileInput[]
    updateMany?: DoctorSpecializationUpdateManyWithWhereWithoutDoctorProfileInput | DoctorSpecializationUpdateManyWithWhereWithoutDoctorProfileInput[]
    deleteMany?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
  }

  export type DoctorRatingUpdateManyWithoutDoctorProfileNestedInput = {
    create?: XOR<DoctorRatingCreateWithoutDoctorProfileInput, DoctorRatingUncheckedCreateWithoutDoctorProfileInput> | DoctorRatingCreateWithoutDoctorProfileInput[] | DoctorRatingUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutDoctorProfileInput | DoctorRatingCreateOrConnectWithoutDoctorProfileInput[]
    upsert?: DoctorRatingUpsertWithWhereUniqueWithoutDoctorProfileInput | DoctorRatingUpsertWithWhereUniqueWithoutDoctorProfileInput[]
    createMany?: DoctorRatingCreateManyDoctorProfileInputEnvelope
    set?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    disconnect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    delete?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    update?: DoctorRatingUpdateWithWhereUniqueWithoutDoctorProfileInput | DoctorRatingUpdateWithWhereUniqueWithoutDoctorProfileInput[]
    updateMany?: DoctorRatingUpdateManyWithWhereWithoutDoctorProfileInput | DoctorRatingUpdateManyWithWhereWithoutDoctorProfileInput[]
    deleteMany?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorProfileNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorProfileInput, AppointmentUncheckedCreateWithoutDoctorProfileInput> | AppointmentCreateWithoutDoctorProfileInput[] | AppointmentUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorProfileInput | AppointmentCreateOrConnectWithoutDoctorProfileInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput | AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput[]
    createMany?: AppointmentCreateManyDoctorProfileInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput | AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorProfileInput | AppointmentUpdateManyWithWhereWithoutDoctorProfileInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorSpecializationUncheckedUpdateManyWithoutDoctorProfileNestedInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorProfileInput, DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput> | DoctorSpecializationCreateWithoutDoctorProfileInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput | DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput[]
    upsert?: DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorProfileInput | DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorProfileInput[]
    createMany?: DoctorSpecializationCreateManyDoctorProfileInputEnvelope
    set?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    disconnect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    delete?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    update?: DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorProfileInput | DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorProfileInput[]
    updateMany?: DoctorSpecializationUpdateManyWithWhereWithoutDoctorProfileInput | DoctorSpecializationUpdateManyWithWhereWithoutDoctorProfileInput[]
    deleteMany?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
  }

  export type DoctorRatingUncheckedUpdateManyWithoutDoctorProfileNestedInput = {
    create?: XOR<DoctorRatingCreateWithoutDoctorProfileInput, DoctorRatingUncheckedCreateWithoutDoctorProfileInput> | DoctorRatingCreateWithoutDoctorProfileInput[] | DoctorRatingUncheckedCreateWithoutDoctorProfileInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutDoctorProfileInput | DoctorRatingCreateOrConnectWithoutDoctorProfileInput[]
    upsert?: DoctorRatingUpsertWithWhereUniqueWithoutDoctorProfileInput | DoctorRatingUpsertWithWhereUniqueWithoutDoctorProfileInput[]
    createMany?: DoctorRatingCreateManyDoctorProfileInputEnvelope
    set?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    disconnect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    delete?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    update?: DoctorRatingUpdateWithWhereUniqueWithoutDoctorProfileInput | DoctorRatingUpdateWithWhereUniqueWithoutDoctorProfileInput[]
    updateMany?: DoctorRatingUpdateManyWithWhereWithoutDoctorProfileInput | DoctorRatingUpdateManyWithWhereWithoutDoctorProfileInput[]
    deleteMany?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
  }

  export type DoctorProfileCreateNestedOneWithoutDoctorSpecializationInput = {
    create?: XOR<DoctorProfileCreateWithoutDoctorSpecializationInput, DoctorProfileUncheckedCreateWithoutDoctorSpecializationInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutDoctorSpecializationInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type DoctorProfileUpdateOneRequiredWithoutDoctorSpecializationNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutDoctorSpecializationInput, DoctorProfileUncheckedCreateWithoutDoctorSpecializationInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutDoctorSpecializationInput
    upsert?: DoctorProfileUpsertWithoutDoctorSpecializationInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutDoctorSpecializationInput, DoctorProfileUpdateWithoutDoctorSpecializationInput>, DoctorProfileUncheckedUpdateWithoutDoctorSpecializationInput>
  }

  export type UserCreateNestedOneWithoutDoctorRatingsInput = {
    create?: XOR<UserCreateWithoutDoctorRatingsInput, UserUncheckedCreateWithoutDoctorRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorProfileCreateNestedOneWithoutDoctorRatingInput = {
    create?: XOR<DoctorProfileCreateWithoutDoctorRatingInput, DoctorProfileUncheckedCreateWithoutDoctorRatingInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutDoctorRatingInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutDoctorRatingInput = {
    create?: XOR<AppointmentCreateWithoutDoctorRatingInput, AppointmentUncheckedCreateWithoutDoctorRatingInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorRatingInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDoctorRatingsNestedInput = {
    create?: XOR<UserCreateWithoutDoctorRatingsInput, UserUncheckedCreateWithoutDoctorRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorRatingsInput
    upsert?: UserUpsertWithoutDoctorRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorRatingsInput, UserUpdateWithoutDoctorRatingsInput>, UserUncheckedUpdateWithoutDoctorRatingsInput>
  }

  export type DoctorProfileUpdateOneRequiredWithoutDoctorRatingNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutDoctorRatingInput, DoctorProfileUncheckedCreateWithoutDoctorRatingInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutDoctorRatingInput
    upsert?: DoctorProfileUpsertWithoutDoctorRatingInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutDoctorRatingInput, DoctorProfileUpdateWithoutDoctorRatingInput>, DoctorProfileUncheckedUpdateWithoutDoctorRatingInput>
  }

  export type AppointmentUpdateOneRequiredWithoutDoctorRatingNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorRatingInput, AppointmentUncheckedCreateWithoutDoctorRatingInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorRatingInput
    upsert?: AppointmentUpsertWithoutDoctorRatingInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutDoctorRatingInput, AppointmentUpdateWithoutDoctorRatingInput>, AppointmentUncheckedUpdateWithoutDoctorRatingInput>
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BookAppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<BookAppointmentCreateWithoutDoctorInput, BookAppointmentUncheckedCreateWithoutDoctorInput> | BookAppointmentCreateWithoutDoctorInput[] | BookAppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutDoctorInput | BookAppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: BookAppointmentCreateManyDoctorInputEnvelope
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
  }

  export type AppointmentSlotCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentSlotCreateWithoutDoctorInput, AppointmentSlotUncheckedCreateWithoutDoctorInput> | AppointmentSlotCreateWithoutDoctorInput[] | AppointmentSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutDoctorInput | AppointmentSlotCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentSlotCreateManyDoctorInputEnvelope
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LocationCreateWithoutDoctorInput, LocationUncheckedCreateWithoutDoctorInput> | LocationCreateWithoutDoctorInput[] | LocationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDoctorInput | LocationCreateOrConnectWithoutDoctorInput[]
    createMany?: LocationCreateManyDoctorInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ServiceCreateWithoutDoctorInput, ServiceUncheckedCreateWithoutDoctorInput> | ServiceCreateWithoutDoctorInput[] | ServiceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDoctorInput | ServiceCreateOrConnectWithoutDoctorInput[]
    createMany?: ServiceCreateManyDoctorInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type DoctorProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput> | DoctorProfileCreateWithoutUserInput[] | DoctorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput | DoctorProfileCreateOrConnectWithoutUserInput[]
    createMany?: DoctorProfileCreateManyUserInputEnvelope
    connect?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
  }

  export type DoctorRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<DoctorRatingCreateWithoutUserInput, DoctorRatingUncheckedCreateWithoutUserInput> | DoctorRatingCreateWithoutUserInput[] | DoctorRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutUserInput | DoctorRatingCreateOrConnectWithoutUserInput[]
    createMany?: DoctorRatingCreateManyUserInputEnvelope
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<BookAppointmentCreateWithoutDoctorInput, BookAppointmentUncheckedCreateWithoutDoctorInput> | BookAppointmentCreateWithoutDoctorInput[] | BookAppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutDoctorInput | BookAppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: BookAppointmentCreateManyDoctorInputEnvelope
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
  }

  export type AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentSlotCreateWithoutDoctorInput, AppointmentSlotUncheckedCreateWithoutDoctorInput> | AppointmentSlotCreateWithoutDoctorInput[] | AppointmentSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutDoctorInput | AppointmentSlotCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentSlotCreateManyDoctorInputEnvelope
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LocationCreateWithoutDoctorInput, LocationUncheckedCreateWithoutDoctorInput> | LocationCreateWithoutDoctorInput[] | LocationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDoctorInput | LocationCreateOrConnectWithoutDoctorInput[]
    createMany?: LocationCreateManyDoctorInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ServiceCreateWithoutDoctorInput, ServiceUncheckedCreateWithoutDoctorInput> | ServiceCreateWithoutDoctorInput[] | ServiceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDoctorInput | ServiceCreateOrConnectWithoutDoctorInput[]
    createMany?: ServiceCreateManyDoctorInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type DoctorProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput> | DoctorProfileCreateWithoutUserInput[] | DoctorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput | DoctorProfileCreateOrConnectWithoutUserInput[]
    createMany?: DoctorProfileCreateManyUserInputEnvelope
    connect?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
  }

  export type DoctorRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DoctorRatingCreateWithoutUserInput, DoctorRatingUncheckedCreateWithoutUserInput> | DoctorRatingCreateWithoutUserInput[] | DoctorRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutUserInput | DoctorRatingCreateOrConnectWithoutUserInput[]
    createMany?: DoctorRatingCreateManyUserInputEnvelope
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BookAppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<BookAppointmentCreateWithoutDoctorInput, BookAppointmentUncheckedCreateWithoutDoctorInput> | BookAppointmentCreateWithoutDoctorInput[] | BookAppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutDoctorInput | BookAppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: BookAppointmentUpsertWithWhereUniqueWithoutDoctorInput | BookAppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: BookAppointmentCreateManyDoctorInputEnvelope
    set?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    disconnect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    delete?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    update?: BookAppointmentUpdateWithWhereUniqueWithoutDoctorInput | BookAppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: BookAppointmentUpdateManyWithWhereWithoutDoctorInput | BookAppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
  }

  export type AppointmentSlotUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentSlotCreateWithoutDoctorInput, AppointmentSlotUncheckedCreateWithoutDoctorInput> | AppointmentSlotCreateWithoutDoctorInput[] | AppointmentSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutDoctorInput | AppointmentSlotCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentSlotUpsertWithWhereUniqueWithoutDoctorInput | AppointmentSlotUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentSlotCreateManyDoctorInputEnvelope
    set?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    disconnect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    delete?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    update?: AppointmentSlotUpdateWithWhereUniqueWithoutDoctorInput | AppointmentSlotUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentSlotUpdateManyWithWhereWithoutDoctorInput | AppointmentSlotUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentSlotScalarWhereInput | AppointmentSlotScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LocationCreateWithoutDoctorInput, LocationUncheckedCreateWithoutDoctorInput> | LocationCreateWithoutDoctorInput[] | LocationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDoctorInput | LocationCreateOrConnectWithoutDoctorInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutDoctorInput | LocationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LocationCreateManyDoctorInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutDoctorInput | LocationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutDoctorInput | LocationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ServiceCreateWithoutDoctorInput, ServiceUncheckedCreateWithoutDoctorInput> | ServiceCreateWithoutDoctorInput[] | ServiceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDoctorInput | ServiceCreateOrConnectWithoutDoctorInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutDoctorInput | ServiceUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ServiceCreateManyDoctorInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutDoctorInput | ServiceUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutDoctorInput | ServiceUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type DoctorProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput> | DoctorProfileCreateWithoutUserInput[] | DoctorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput | DoctorProfileCreateOrConnectWithoutUserInput[]
    upsert?: DoctorProfileUpsertWithWhereUniqueWithoutUserInput | DoctorProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoctorProfileCreateManyUserInputEnvelope
    set?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    disconnect?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    delete?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    connect?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    update?: DoctorProfileUpdateWithWhereUniqueWithoutUserInput | DoctorProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoctorProfileUpdateManyWithWhereWithoutUserInput | DoctorProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoctorProfileScalarWhereInput | DoctorProfileScalarWhereInput[]
  }

  export type DoctorRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoctorRatingCreateWithoutUserInput, DoctorRatingUncheckedCreateWithoutUserInput> | DoctorRatingCreateWithoutUserInput[] | DoctorRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutUserInput | DoctorRatingCreateOrConnectWithoutUserInput[]
    upsert?: DoctorRatingUpsertWithWhereUniqueWithoutUserInput | DoctorRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoctorRatingCreateManyUserInputEnvelope
    set?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    disconnect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    delete?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    update?: DoctorRatingUpdateWithWhereUniqueWithoutUserInput | DoctorRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoctorRatingUpdateManyWithWhereWithoutUserInput | DoctorRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<BookAppointmentCreateWithoutDoctorInput, BookAppointmentUncheckedCreateWithoutDoctorInput> | BookAppointmentCreateWithoutDoctorInput[] | BookAppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: BookAppointmentCreateOrConnectWithoutDoctorInput | BookAppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: BookAppointmentUpsertWithWhereUniqueWithoutDoctorInput | BookAppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: BookAppointmentCreateManyDoctorInputEnvelope
    set?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    disconnect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    delete?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    connect?: BookAppointmentWhereUniqueInput | BookAppointmentWhereUniqueInput[]
    update?: BookAppointmentUpdateWithWhereUniqueWithoutDoctorInput | BookAppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: BookAppointmentUpdateManyWithWhereWithoutDoctorInput | BookAppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
  }

  export type AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentSlotCreateWithoutDoctorInput, AppointmentSlotUncheckedCreateWithoutDoctorInput> | AppointmentSlotCreateWithoutDoctorInput[] | AppointmentSlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentSlotCreateOrConnectWithoutDoctorInput | AppointmentSlotCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentSlotUpsertWithWhereUniqueWithoutDoctorInput | AppointmentSlotUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentSlotCreateManyDoctorInputEnvelope
    set?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    disconnect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    delete?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    connect?: AppointmentSlotWhereUniqueInput | AppointmentSlotWhereUniqueInput[]
    update?: AppointmentSlotUpdateWithWhereUniqueWithoutDoctorInput | AppointmentSlotUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentSlotUpdateManyWithWhereWithoutDoctorInput | AppointmentSlotUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentSlotScalarWhereInput | AppointmentSlotScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LocationCreateWithoutDoctorInput, LocationUncheckedCreateWithoutDoctorInput> | LocationCreateWithoutDoctorInput[] | LocationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDoctorInput | LocationCreateOrConnectWithoutDoctorInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutDoctorInput | LocationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LocationCreateManyDoctorInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutDoctorInput | LocationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutDoctorInput | LocationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ServiceCreateWithoutDoctorInput, ServiceUncheckedCreateWithoutDoctorInput> | ServiceCreateWithoutDoctorInput[] | ServiceUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDoctorInput | ServiceCreateOrConnectWithoutDoctorInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutDoctorInput | ServiceUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ServiceCreateManyDoctorInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutDoctorInput | ServiceUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutDoctorInput | ServiceUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type DoctorProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput> | DoctorProfileCreateWithoutUserInput[] | DoctorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput | DoctorProfileCreateOrConnectWithoutUserInput[]
    upsert?: DoctorProfileUpsertWithWhereUniqueWithoutUserInput | DoctorProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoctorProfileCreateManyUserInputEnvelope
    set?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    disconnect?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    delete?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    connect?: DoctorProfileWhereUniqueInput | DoctorProfileWhereUniqueInput[]
    update?: DoctorProfileUpdateWithWhereUniqueWithoutUserInput | DoctorProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoctorProfileUpdateManyWithWhereWithoutUserInput | DoctorProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoctorProfileScalarWhereInput | DoctorProfileScalarWhereInput[]
  }

  export type DoctorRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoctorRatingCreateWithoutUserInput, DoctorRatingUncheckedCreateWithoutUserInput> | DoctorRatingCreateWithoutUserInput[] | DoctorRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorRatingCreateOrConnectWithoutUserInput | DoctorRatingCreateOrConnectWithoutUserInput[]
    upsert?: DoctorRatingUpsertWithWhereUniqueWithoutUserInput | DoctorRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoctorRatingCreateManyUserInputEnvelope
    set?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    disconnect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    delete?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    connect?: DoctorRatingWhereUniqueInput | DoctorRatingWhereUniqueInput[]
    update?: DoctorRatingUpdateWithWhereUniqueWithoutUserInput | DoctorRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoctorRatingUpdateManyWithWhereWithoutUserInput | DoctorRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorProfileCreateWithoutAppointmentInput = {
    id?: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutDoctorProfilesInput
    doctorSpecialization?: DoctorSpecializationCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileUncheckedCreateWithoutAppointmentInput = {
    id?: string
    userId: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorSpecialization?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileCreateOrConnectWithoutAppointmentInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutAppointmentInput, DoctorProfileUncheckedCreateWithoutAppointmentInput>
  }

  export type LocationCreateWithoutAppointmentInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutLocationsInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotCreateNestedManyWithoutLocationInput
    service?: ServiceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotUncheckedCreateNestedManyWithoutLocationInput
    service?: ServiceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutAppointmentInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAppointmentInput, LocationUncheckedCreateWithoutAppointmentInput>
  }

  export type ServiceCreateWithoutAppointmentInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutServicesInput
    location: LocationCreateNestedOneWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    locationId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ServiceCreateOrConnectWithoutAppointmentInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorRatingCreateWithoutAppointmentInput = {
    id?: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutDoctorRatingsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutDoctorRatingInput
  }

  export type DoctorRatingUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    doctorProfileId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type DoctorRatingCreateOrConnectWithoutAppointmentInput = {
    where: DoctorRatingWhereUniqueInput
    create: XOR<DoctorRatingCreateWithoutAppointmentInput, DoctorRatingUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorRatingCreateManyAppointmentInputEnvelope = {
    data: DoctorRatingCreateManyAppointmentInput | DoctorRatingCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type BookAppointmentCreateWithoutAppointmentInput = {
    id?: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutBookAppointmentsInput
    location: LocationCreateNestedOneWithoutBookAppointmentInput
  }

  export type BookAppointmentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    locationId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookAppointmentCreateOrConnectWithoutAppointmentInput = {
    where: BookAppointmentWhereUniqueInput
    create: XOR<BookAppointmentCreateWithoutAppointmentInput, BookAppointmentUncheckedCreateWithoutAppointmentInput>
  }

  export type BookAppointmentCreateManyAppointmentInputEnvelope = {
    data: BookAppointmentCreateManyAppointmentInput | BookAppointmentCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutAppointmentInput = {
    id?: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status: string
    paymentMethod: string
    currencyCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PaymentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status: string
    paymentMethod: string
    currencyCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentCreateManyAppointmentInputEnvelope = {
    data: PaymentCreateManyAppointmentInput | PaymentCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DoctorProfileUpsertWithoutAppointmentInput = {
    update: XOR<DoctorProfileUpdateWithoutAppointmentInput, DoctorProfileUncheckedUpdateWithoutAppointmentInput>
    create: XOR<DoctorProfileCreateWithoutAppointmentInput, DoctorProfileUncheckedCreateWithoutAppointmentInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutAppointmentInput, DoctorProfileUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorProfileUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDoctorProfilesNestedInput
    doctorSpecialization?: DoctorSpecializationUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorSpecialization?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutDoctorProfileNestedInput
  }

  export type LocationUpsertWithoutAppointmentInput = {
    update: XOR<LocationUpdateWithoutAppointmentInput, LocationUncheckedUpdateWithoutAppointmentInput>
    create: XOR<LocationCreateWithoutAppointmentInput, LocationUncheckedCreateWithoutAppointmentInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutAppointmentInput, LocationUncheckedUpdateWithoutAppointmentInput>
  }

  export type LocationUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutLocationsNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUpdateManyWithoutLocationNestedInput
    service?: ServiceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUncheckedUpdateManyWithoutLocationNestedInput
    service?: ServiceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ServiceUpsertWithoutAppointmentInput = {
    update: XOR<ServiceUpdateWithoutAppointmentInput, ServiceUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAppointmentInput, ServiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type ServiceUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutServicesNestedInput
    location?: LocationUpdateOneRequiredWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorRatingUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: DoctorRatingWhereUniqueInput
    update: XOR<DoctorRatingUpdateWithoutAppointmentInput, DoctorRatingUncheckedUpdateWithoutAppointmentInput>
    create: XOR<DoctorRatingCreateWithoutAppointmentInput, DoctorRatingUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorRatingUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: DoctorRatingWhereUniqueInput
    data: XOR<DoctorRatingUpdateWithoutAppointmentInput, DoctorRatingUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorRatingUpdateManyWithWhereWithoutAppointmentInput = {
    where: DoctorRatingScalarWhereInput
    data: XOR<DoctorRatingUpdateManyMutationInput, DoctorRatingUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type DoctorRatingScalarWhereInput = {
    AND?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
    OR?: DoctorRatingScalarWhereInput[]
    NOT?: DoctorRatingScalarWhereInput | DoctorRatingScalarWhereInput[]
    id?: StringFilter<"DoctorRating"> | string
    doctorId?: StringFilter<"DoctorRating"> | string
    doctorProfileId?: StringFilter<"DoctorRating"> | string
    appointmentId?: StringFilter<"DoctorRating"> | string
    review?: StringFilter<"DoctorRating"> | string
    rating?: DecimalFilter<"DoctorRating"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DoctorRating"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorRating"> | Date | string | null
    isActive?: BoolFilter<"DoctorRating"> | boolean
  }

  export type BookAppointmentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: BookAppointmentWhereUniqueInput
    update: XOR<BookAppointmentUpdateWithoutAppointmentInput, BookAppointmentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<BookAppointmentCreateWithoutAppointmentInput, BookAppointmentUncheckedCreateWithoutAppointmentInput>
  }

  export type BookAppointmentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: BookAppointmentWhereUniqueInput
    data: XOR<BookAppointmentUpdateWithoutAppointmentInput, BookAppointmentUncheckedUpdateWithoutAppointmentInput>
  }

  export type BookAppointmentUpdateManyWithWhereWithoutAppointmentInput = {
    where: BookAppointmentScalarWhereInput
    data: XOR<BookAppointmentUpdateManyMutationInput, BookAppointmentUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type BookAppointmentScalarWhereInput = {
    AND?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
    OR?: BookAppointmentScalarWhereInput[]
    NOT?: BookAppointmentScalarWhereInput | BookAppointmentScalarWhereInput[]
    id?: StringFilter<"BookAppointment"> | string
    doctorId?: StringFilter<"BookAppointment"> | string
    locationId?: StringFilter<"BookAppointment"> | string
    appointmentId?: StringFilter<"BookAppointment"> | string
    date?: DateTimeFilter<"BookAppointment"> | Date | string
    day?: StringNullableFilter<"BookAppointment"> | string | null
    startTime?: StringNullableFilter<"BookAppointment"> | string | null
    endTime?: StringNullableFilter<"BookAppointment"> | string | null
    status?: StringNullableFilter<"BookAppointment"> | string | null
    isActive?: BoolFilter<"BookAppointment"> | boolean
    createdAt?: DateTimeFilter<"BookAppointment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BookAppointment"> | Date | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutAppointmentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    appointmentId?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    currencyCode?: StringNullableFilter<"Payment"> | string | null
    isActive?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
  }

  export type UserCreateWithoutBookAppointmentsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookAppointmentsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookAppointmentsInput, UserUncheckedCreateWithoutBookAppointmentsInput>
  }

  export type LocationCreateWithoutBookAppointmentInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutLocationsInput
    appointment?: AppointmentCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotCreateNestedManyWithoutLocationInput
    service?: ServiceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutBookAppointmentInput = {
    id?: string
    doctorId: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotUncheckedCreateNestedManyWithoutLocationInput
    service?: ServiceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutBookAppointmentInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutBookAppointmentInput, LocationUncheckedCreateWithoutBookAppointmentInput>
  }

  export type AppointmentCreateWithoutBookAppointmentInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutAppointmentInput
    location: LocationCreateNestedOneWithoutAppointmentInput
    service: ServiceCreateNestedOneWithoutAppointmentInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutAppointmentInput
    payment?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutBookAppointmentInput = {
    id?: string
    userId: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutBookAppointmentInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutBookAppointmentInput, AppointmentUncheckedCreateWithoutBookAppointmentInput>
  }

  export type UserUpsertWithoutBookAppointmentsInput = {
    update: XOR<UserUpdateWithoutBookAppointmentsInput, UserUncheckedUpdateWithoutBookAppointmentsInput>
    create: XOR<UserCreateWithoutBookAppointmentsInput, UserUncheckedCreateWithoutBookAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookAppointmentsInput, UserUncheckedUpdateWithoutBookAppointmentsInput>
  }

  export type UserUpdateWithoutBookAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationUpsertWithoutBookAppointmentInput = {
    update: XOR<LocationUpdateWithoutBookAppointmentInput, LocationUncheckedUpdateWithoutBookAppointmentInput>
    create: XOR<LocationCreateWithoutBookAppointmentInput, LocationUncheckedCreateWithoutBookAppointmentInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutBookAppointmentInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutBookAppointmentInput, LocationUncheckedUpdateWithoutBookAppointmentInput>
  }

  export type LocationUpdateWithoutBookAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutLocationsNestedInput
    appointment?: AppointmentUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUpdateManyWithoutLocationNestedInput
    service?: ServiceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutBookAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUncheckedUpdateManyWithoutLocationNestedInput
    service?: ServiceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type AppointmentUpsertWithoutBookAppointmentInput = {
    update: XOR<AppointmentUpdateWithoutBookAppointmentInput, AppointmentUncheckedUpdateWithoutBookAppointmentInput>
    create: XOR<AppointmentCreateWithoutBookAppointmentInput, AppointmentUncheckedCreateWithoutBookAppointmentInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutBookAppointmentInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutBookAppointmentInput, AppointmentUncheckedUpdateWithoutBookAppointmentInput>
  }

  export type AppointmentUpdateWithoutBookAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutBookAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserCreateWithoutAppointmentSlotsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentSlotsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentSlotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentSlotsInput, UserUncheckedCreateWithoutAppointmentSlotsInput>
  }

  export type LocationCreateWithoutAppointmentSlotInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutLocationsInput
    appointment?: AppointmentCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutLocationInput
    service?: ServiceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutAppointmentSlotInput = {
    id?: string
    doctorId: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutLocationInput
    service?: ServiceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutAppointmentSlotInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAppointmentSlotInput, LocationUncheckedCreateWithoutAppointmentSlotInput>
  }

  export type UserUpsertWithoutAppointmentSlotsInput = {
    update: XOR<UserUpdateWithoutAppointmentSlotsInput, UserUncheckedUpdateWithoutAppointmentSlotsInput>
    create: XOR<UserCreateWithoutAppointmentSlotsInput, UserUncheckedCreateWithoutAppointmentSlotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentSlotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentSlotsInput, UserUncheckedUpdateWithoutAppointmentSlotsInput>
  }

  export type UserUpdateWithoutAppointmentSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationUpsertWithoutAppointmentSlotInput = {
    update: XOR<LocationUpdateWithoutAppointmentSlotInput, LocationUncheckedUpdateWithoutAppointmentSlotInput>
    create: XOR<LocationCreateWithoutAppointmentSlotInput, LocationUncheckedCreateWithoutAppointmentSlotInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutAppointmentSlotInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutAppointmentSlotInput, LocationUncheckedUpdateWithoutAppointmentSlotInput>
  }

  export type LocationUpdateWithoutAppointmentSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutLocationsNestedInput
    appointment?: AppointmentUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutLocationNestedInput
    service?: ServiceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutAppointmentSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutLocationNestedInput
    service?: ServiceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type UserCreateWithoutLocationsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
  }

  export type AppointmentCreateWithoutLocationInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutAppointmentInput
    service: ServiceCreateNestedOneWithoutAppointmentInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutAppointmentInput
    payment?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    doctorProfileId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutLocationInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutLocationInput, AppointmentUncheckedCreateWithoutLocationInput>
  }

  export type AppointmentCreateManyLocationInputEnvelope = {
    data: AppointmentCreateManyLocationInput | AppointmentCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type BookAppointmentCreateWithoutLocationInput = {
    id?: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutBookAppointmentsInput
    appointment: AppointmentCreateNestedOneWithoutBookAppointmentInput
  }

  export type BookAppointmentUncheckedCreateWithoutLocationInput = {
    id?: string
    doctorId: string
    appointmentId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookAppointmentCreateOrConnectWithoutLocationInput = {
    where: BookAppointmentWhereUniqueInput
    create: XOR<BookAppointmentCreateWithoutLocationInput, BookAppointmentUncheckedCreateWithoutLocationInput>
  }

  export type BookAppointmentCreateManyLocationInputEnvelope = {
    data: BookAppointmentCreateManyLocationInput | BookAppointmentCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentSlotCreateWithoutLocationInput = {
    id?: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutAppointmentSlotsInput
  }

  export type AppointmentSlotUncheckedCreateWithoutLocationInput = {
    id?: string
    doctorId: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentSlotCreateOrConnectWithoutLocationInput = {
    where: AppointmentSlotWhereUniqueInput
    create: XOR<AppointmentSlotCreateWithoutLocationInput, AppointmentSlotUncheckedCreateWithoutLocationInput>
  }

  export type AppointmentSlotCreateManyLocationInputEnvelope = {
    data: AppointmentSlotCreateManyLocationInput | AppointmentSlotCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutLocationInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutServicesInput
    appointment?: AppointmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutLocationInput = {
    id?: string
    doctorId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutLocationInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput>
  }

  export type ServiceCreateManyLocationInputEnvelope = {
    data: ServiceCreateManyLocationInput | ServiceCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLocationsInput = {
    update: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutLocationInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutLocationInput, AppointmentUncheckedUpdateWithoutLocationInput>
    create: XOR<AppointmentCreateWithoutLocationInput, AppointmentUncheckedCreateWithoutLocationInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutLocationInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutLocationInput, AppointmentUncheckedUpdateWithoutLocationInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutLocationInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutLocationInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    doctorProfileId?: StringFilter<"Appointment"> | string
    locationId?: StringFilter<"Appointment"> | string
    serviceId?: StringFilter<"Appointment"> | string
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringNullableFilter<"Appointment"> | string | null
    isActive?: BoolFilter<"Appointment"> | boolean
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
  }

  export type BookAppointmentUpsertWithWhereUniqueWithoutLocationInput = {
    where: BookAppointmentWhereUniqueInput
    update: XOR<BookAppointmentUpdateWithoutLocationInput, BookAppointmentUncheckedUpdateWithoutLocationInput>
    create: XOR<BookAppointmentCreateWithoutLocationInput, BookAppointmentUncheckedCreateWithoutLocationInput>
  }

  export type BookAppointmentUpdateWithWhereUniqueWithoutLocationInput = {
    where: BookAppointmentWhereUniqueInput
    data: XOR<BookAppointmentUpdateWithoutLocationInput, BookAppointmentUncheckedUpdateWithoutLocationInput>
  }

  export type BookAppointmentUpdateManyWithWhereWithoutLocationInput = {
    where: BookAppointmentScalarWhereInput
    data: XOR<BookAppointmentUpdateManyMutationInput, BookAppointmentUncheckedUpdateManyWithoutLocationInput>
  }

  export type AppointmentSlotUpsertWithWhereUniqueWithoutLocationInput = {
    where: AppointmentSlotWhereUniqueInput
    update: XOR<AppointmentSlotUpdateWithoutLocationInput, AppointmentSlotUncheckedUpdateWithoutLocationInput>
    create: XOR<AppointmentSlotCreateWithoutLocationInput, AppointmentSlotUncheckedCreateWithoutLocationInput>
  }

  export type AppointmentSlotUpdateWithWhereUniqueWithoutLocationInput = {
    where: AppointmentSlotWhereUniqueInput
    data: XOR<AppointmentSlotUpdateWithoutLocationInput, AppointmentSlotUncheckedUpdateWithoutLocationInput>
  }

  export type AppointmentSlotUpdateManyWithWhereWithoutLocationInput = {
    where: AppointmentSlotScalarWhereInput
    data: XOR<AppointmentSlotUpdateManyMutationInput, AppointmentSlotUncheckedUpdateManyWithoutLocationInput>
  }

  export type AppointmentSlotScalarWhereInput = {
    AND?: AppointmentSlotScalarWhereInput | AppointmentSlotScalarWhereInput[]
    OR?: AppointmentSlotScalarWhereInput[]
    NOT?: AppointmentSlotScalarWhereInput | AppointmentSlotScalarWhereInput[]
    id?: StringFilter<"AppointmentSlot"> | string
    doctorId?: StringFilter<"AppointmentSlot"> | string
    locationId?: StringFilter<"AppointmentSlot"> | string
    day?: StringNullableFilter<"AppointmentSlot"> | string | null
    startTime?: StringNullableFilter<"AppointmentSlot"> | string | null
    endTime?: StringNullableFilter<"AppointmentSlot"> | string | null
    appointmentSlotDuration?: IntNullableFilter<"AppointmentSlot"> | number | null
    totalAppointmentSlots?: IntNullableFilter<"AppointmentSlot"> | number | null
    isActive?: BoolFilter<"AppointmentSlot"> | boolean
    createdAt?: DateTimeFilter<"AppointmentSlot"> | Date | string
    updatedAt?: DateTimeNullableFilter<"AppointmentSlot"> | Date | string | null
  }

  export type ServiceUpsertWithWhereUniqueWithoutLocationInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutLocationInput, ServiceUncheckedUpdateWithoutLocationInput>
    create: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutLocationInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutLocationInput, ServiceUncheckedUpdateWithoutLocationInput>
  }

  export type ServiceUpdateManyWithWhereWithoutLocationInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutLocationInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    doctorId?: StringFilter<"Service"> | string
    locationId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
  }

  export type UserCreateWithoutServicesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
  }

  export type LocationCreateWithoutServiceInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctor: UserCreateNestedOneWithoutLocationsInput
    appointment?: AppointmentCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutServiceInput = {
    id?: string
    doctorId: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutServiceInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutServiceInput, LocationUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentCreateWithoutServiceInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutAppointmentInput
    location: LocationCreateNestedOneWithoutAppointmentInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutAppointmentInput
    payment?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutServiceInput = {
    id?: string
    userId: string
    doctorProfileId: string
    locationId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentCreateManyServiceInputEnvelope = {
    data: AppointmentCreateManyServiceInput | AppointmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServicesInput = {
    update: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationUpsertWithoutServiceInput = {
    update: XOR<LocationUpdateWithoutServiceInput, LocationUncheckedUpdateWithoutServiceInput>
    create: XOR<LocationCreateWithoutServiceInput, LocationUncheckedCreateWithoutServiceInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutServiceInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutServiceInput, LocationUncheckedUpdateWithoutServiceInput>
  }

  export type LocationUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutLocationsNestedInput
    appointment?: AppointmentUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutServiceInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type AppointmentCreateWithoutPaymentInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutAppointmentInput
    location: LocationCreateNestedOneWithoutAppointmentInput
    service: ServiceCreateNestedOneWithoutAppointmentInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPaymentInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
  }

  export type AppointmentUpsertWithoutPaymentInput = {
    update: XOR<AppointmentUpdateWithoutPaymentInput, AppointmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPaymentInput, AppointmentUncheckedUpdateWithoutPaymentInput>
  }

  export type AppointmentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserCreateWithoutDoctorProfilesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorProfilesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorProfilesInput, UserUncheckedCreateWithoutDoctorProfilesInput>
  }

  export type AppointmentCreateWithoutDoctorProfileInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    location: LocationCreateNestedOneWithoutAppointmentInput
    service: ServiceCreateNestedOneWithoutAppointmentInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutAppointmentInput
    payment?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorProfileInput = {
    id?: string
    userId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorProfileInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorProfileInput, AppointmentUncheckedCreateWithoutDoctorProfileInput>
  }

  export type AppointmentCreateManyDoctorProfileInputEnvelope = {
    data: AppointmentCreateManyDoctorProfileInput | AppointmentCreateManyDoctorProfileInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSpecializationCreateWithoutDoctorProfileInput = {
    id?: string
    specialization: string
    documentUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput = {
    id?: string
    specialization: string
    documentUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorSpecializationCreateOrConnectWithoutDoctorProfileInput = {
    where: DoctorSpecializationWhereUniqueInput
    create: XOR<DoctorSpecializationCreateWithoutDoctorProfileInput, DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput>
  }

  export type DoctorSpecializationCreateManyDoctorProfileInputEnvelope = {
    data: DoctorSpecializationCreateManyDoctorProfileInput | DoctorSpecializationCreateManyDoctorProfileInput[]
    skipDuplicates?: boolean
  }

  export type DoctorRatingCreateWithoutDoctorProfileInput = {
    id?: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutDoctorRatingsInput
    appointment: AppointmentCreateNestedOneWithoutDoctorRatingInput
  }

  export type DoctorRatingUncheckedCreateWithoutDoctorProfileInput = {
    id?: string
    doctorId: string
    appointmentId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type DoctorRatingCreateOrConnectWithoutDoctorProfileInput = {
    where: DoctorRatingWhereUniqueInput
    create: XOR<DoctorRatingCreateWithoutDoctorProfileInput, DoctorRatingUncheckedCreateWithoutDoctorProfileInput>
  }

  export type DoctorRatingCreateManyDoctorProfileInputEnvelope = {
    data: DoctorRatingCreateManyDoctorProfileInput | DoctorRatingCreateManyDoctorProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorProfilesInput = {
    update: XOR<UserUpdateWithoutDoctorProfilesInput, UserUncheckedUpdateWithoutDoctorProfilesInput>
    create: XOR<UserCreateWithoutDoctorProfilesInput, UserUncheckedCreateWithoutDoctorProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorProfilesInput, UserUncheckedUpdateWithoutDoctorProfilesInput>
  }

  export type UserUpdateWithoutDoctorProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorProfileInput, AppointmentUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<AppointmentCreateWithoutDoctorProfileInput, AppointmentUncheckedCreateWithoutDoctorProfileInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorProfileInput, AppointmentUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorProfileInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorProfileInput>
  }

  export type DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorProfileInput = {
    where: DoctorSpecializationWhereUniqueInput
    update: XOR<DoctorSpecializationUpdateWithoutDoctorProfileInput, DoctorSpecializationUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<DoctorSpecializationCreateWithoutDoctorProfileInput, DoctorSpecializationUncheckedCreateWithoutDoctorProfileInput>
  }

  export type DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorProfileInput = {
    where: DoctorSpecializationWhereUniqueInput
    data: XOR<DoctorSpecializationUpdateWithoutDoctorProfileInput, DoctorSpecializationUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type DoctorSpecializationUpdateManyWithWhereWithoutDoctorProfileInput = {
    where: DoctorSpecializationScalarWhereInput
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyWithoutDoctorProfileInput>
  }

  export type DoctorSpecializationScalarWhereInput = {
    AND?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
    OR?: DoctorSpecializationScalarWhereInput[]
    NOT?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
    id?: StringFilter<"DoctorSpecialization"> | string
    doctorProfileId?: StringFilter<"DoctorSpecialization"> | string
    specialization?: StringFilter<"DoctorSpecialization"> | string
    documentUrl?: StringNullableFilter<"DoctorSpecialization"> | string | null
    isVerified?: BoolFilter<"DoctorSpecialization"> | boolean
    verifiedBy?: StringNullableFilter<"DoctorSpecialization"> | string | null
    isActive?: BoolFilter<"DoctorSpecialization"> | boolean
    createdAt?: DateTimeFilter<"DoctorSpecialization"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorSpecialization"> | Date | string | null
  }

  export type DoctorRatingUpsertWithWhereUniqueWithoutDoctorProfileInput = {
    where: DoctorRatingWhereUniqueInput
    update: XOR<DoctorRatingUpdateWithoutDoctorProfileInput, DoctorRatingUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<DoctorRatingCreateWithoutDoctorProfileInput, DoctorRatingUncheckedCreateWithoutDoctorProfileInput>
  }

  export type DoctorRatingUpdateWithWhereUniqueWithoutDoctorProfileInput = {
    where: DoctorRatingWhereUniqueInput
    data: XOR<DoctorRatingUpdateWithoutDoctorProfileInput, DoctorRatingUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type DoctorRatingUpdateManyWithWhereWithoutDoctorProfileInput = {
    where: DoctorRatingScalarWhereInput
    data: XOR<DoctorRatingUpdateManyMutationInput, DoctorRatingUncheckedUpdateManyWithoutDoctorProfileInput>
  }

  export type DoctorProfileCreateWithoutDoctorSpecializationInput = {
    id?: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutDoctorProfilesInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileUncheckedCreateWithoutDoctorSpecializationInput = {
    id?: string
    userId: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileCreateOrConnectWithoutDoctorSpecializationInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutDoctorSpecializationInput, DoctorProfileUncheckedCreateWithoutDoctorSpecializationInput>
  }

  export type DoctorProfileUpsertWithoutDoctorSpecializationInput = {
    update: XOR<DoctorProfileUpdateWithoutDoctorSpecializationInput, DoctorProfileUncheckedUpdateWithoutDoctorSpecializationInput>
    create: XOR<DoctorProfileCreateWithoutDoctorSpecializationInput, DoctorProfileUncheckedCreateWithoutDoctorSpecializationInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutDoctorSpecializationInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutDoctorSpecializationInput, DoctorProfileUncheckedUpdateWithoutDoctorSpecializationInput>
  }

  export type DoctorProfileUpdateWithoutDoctorSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDoctorProfilesNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutDoctorSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutDoctorProfileNestedInput
  }

  export type UserCreateWithoutDoctorRatingsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorRatingsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorRatingsInput, UserUncheckedCreateWithoutDoctorRatingsInput>
  }

  export type DoctorProfileCreateWithoutDoctorRatingInput = {
    id?: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutDoctorProfilesInput
    appointment?: AppointmentCreateNestedManyWithoutDoctorProfileInput
    doctorSpecialization?: DoctorSpecializationCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileUncheckedCreateWithoutDoctorRatingInput = {
    id?: string
    userId: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorProfileInput
    doctorSpecialization?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileCreateOrConnectWithoutDoctorRatingInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutDoctorRatingInput, DoctorProfileUncheckedCreateWithoutDoctorRatingInput>
  }

  export type AppointmentCreateWithoutDoctorRatingInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    doctorProfile: DoctorProfileCreateNestedOneWithoutAppointmentInput
    location: LocationCreateNestedOneWithoutAppointmentInput
    service: ServiceCreateNestedOneWithoutAppointmentInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutAppointmentInput
    payment?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorRatingInput = {
    id?: string
    userId: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorRatingInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorRatingInput, AppointmentUncheckedCreateWithoutDoctorRatingInput>
  }

  export type UserUpsertWithoutDoctorRatingsInput = {
    update: XOR<UserUpdateWithoutDoctorRatingsInput, UserUncheckedUpdateWithoutDoctorRatingsInput>
    create: XOR<UserCreateWithoutDoctorRatingsInput, UserUncheckedCreateWithoutDoctorRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorRatingsInput, UserUncheckedUpdateWithoutDoctorRatingsInput>
  }

  export type UserUpdateWithoutDoctorRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DoctorProfileUpsertWithoutDoctorRatingInput = {
    update: XOR<DoctorProfileUpdateWithoutDoctorRatingInput, DoctorProfileUncheckedUpdateWithoutDoctorRatingInput>
    create: XOR<DoctorProfileCreateWithoutDoctorRatingInput, DoctorProfileUncheckedCreateWithoutDoctorRatingInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutDoctorRatingInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutDoctorRatingInput, DoctorProfileUncheckedUpdateWithoutDoctorRatingInput>
  }

  export type DoctorProfileUpdateWithoutDoctorRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDoctorProfilesNestedInput
    appointment?: AppointmentUpdateManyWithoutDoctorProfileNestedInput
    doctorSpecialization?: DoctorSpecializationUpdateManyWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutDoctorRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorProfileNestedInput
    doctorSpecialization?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorProfileNestedInput
  }

  export type AppointmentUpsertWithoutDoctorRatingInput = {
    update: XOR<AppointmentUpdateWithoutDoctorRatingInput, AppointmentUncheckedUpdateWithoutDoctorRatingInput>
    create: XOR<AppointmentCreateWithoutDoctorRatingInput, AppointmentUncheckedCreateWithoutDoctorRatingInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutDoctorRatingInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutDoctorRatingInput, AppointmentUncheckedUpdateWithoutDoctorRatingInput>
  }

  export type AppointmentUpdateWithoutDoctorRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutUserInput = {
    id?: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorProfile: DoctorProfileCreateNestedOneWithoutAppointmentInput
    location: LocationCreateNestedOneWithoutAppointmentInput
    service: ServiceCreateNestedOneWithoutAppointmentInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutAppointmentInput
    payment?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutAppointmentInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookAppointmentCreateWithoutDoctorInput = {
    id?: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: LocationCreateNestedOneWithoutBookAppointmentInput
    appointment: AppointmentCreateNestedOneWithoutBookAppointmentInput
  }

  export type BookAppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    locationId: string
    appointmentId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookAppointmentCreateOrConnectWithoutDoctorInput = {
    where: BookAppointmentWhereUniqueInput
    create: XOR<BookAppointmentCreateWithoutDoctorInput, BookAppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type BookAppointmentCreateManyDoctorInputEnvelope = {
    data: BookAppointmentCreateManyDoctorInput | BookAppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentSlotCreateWithoutDoctorInput = {
    id?: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: LocationCreateNestedOneWithoutAppointmentSlotInput
  }

  export type AppointmentSlotUncheckedCreateWithoutDoctorInput = {
    id?: string
    locationId: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentSlotCreateOrConnectWithoutDoctorInput = {
    where: AppointmentSlotWhereUniqueInput
    create: XOR<AppointmentSlotCreateWithoutDoctorInput, AppointmentSlotUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentSlotCreateManyDoctorInputEnvelope = {
    data: AppointmentSlotCreateManyDoctorInput | AppointmentSlotCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutDoctorInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotCreateNestedManyWithoutLocationInput
    service?: ServiceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutDoctorInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLocationInput
    bookAppointment?: BookAppointmentUncheckedCreateNestedManyWithoutLocationInput
    appointmentSlot?: AppointmentSlotUncheckedCreateNestedManyWithoutLocationInput
    service?: ServiceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutDoctorInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutDoctorInput, LocationUncheckedCreateWithoutDoctorInput>
  }

  export type LocationCreateManyDoctorInputEnvelope = {
    data: LocationCreateManyDoctorInput | LocationCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutDoctorInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: LocationCreateNestedOneWithoutServiceInput
    appointment?: AppointmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutDoctorInput = {
    id?: string
    locationId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutDoctorInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDoctorInput, ServiceUncheckedCreateWithoutDoctorInput>
  }

  export type ServiceCreateManyDoctorInputEnvelope = {
    data: ServiceCreateManyDoctorInput | ServiceCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorProfileCreateWithoutUserInput = {
    id?: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentCreateNestedManyWithoutDoctorProfileInput
    doctorSpecialization?: DoctorSpecializationCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointment?: AppointmentUncheckedCreateNestedManyWithoutDoctorProfileInput
    doctorSpecialization?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorProfileInput
    doctorRating?: DoctorRatingUncheckedCreateNestedManyWithoutDoctorProfileInput
  }

  export type DoctorProfileCreateOrConnectWithoutUserInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
  }

  export type DoctorProfileCreateManyUserInputEnvelope = {
    data: DoctorProfileCreateManyUserInput | DoctorProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DoctorRatingCreateWithoutUserInput = {
    id?: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    doctorProfile: DoctorProfileCreateNestedOneWithoutDoctorRatingInput
    appointment: AppointmentCreateNestedOneWithoutDoctorRatingInput
  }

  export type DoctorRatingUncheckedCreateWithoutUserInput = {
    id?: string
    doctorProfileId: string
    appointmentId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type DoctorRatingCreateOrConnectWithoutUserInput = {
    where: DoctorRatingWhereUniqueInput
    create: XOR<DoctorRatingCreateWithoutUserInput, DoctorRatingUncheckedCreateWithoutUserInput>
  }

  export type DoctorRatingCreateManyUserInputEnvelope = {
    data: DoctorRatingCreateManyUserInput | DoctorRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type BookAppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: BookAppointmentWhereUniqueInput
    update: XOR<BookAppointmentUpdateWithoutDoctorInput, BookAppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<BookAppointmentCreateWithoutDoctorInput, BookAppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type BookAppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: BookAppointmentWhereUniqueInput
    data: XOR<BookAppointmentUpdateWithoutDoctorInput, BookAppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type BookAppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: BookAppointmentScalarWhereInput
    data: XOR<BookAppointmentUpdateManyMutationInput, BookAppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentSlotUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentSlotWhereUniqueInput
    update: XOR<AppointmentSlotUpdateWithoutDoctorInput, AppointmentSlotUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentSlotCreateWithoutDoctorInput, AppointmentSlotUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentSlotUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentSlotWhereUniqueInput
    data: XOR<AppointmentSlotUpdateWithoutDoctorInput, AppointmentSlotUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentSlotUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentSlotScalarWhereInput
    data: XOR<AppointmentSlotUpdateManyMutationInput, AppointmentSlotUncheckedUpdateManyWithoutDoctorInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutDoctorInput, LocationUncheckedUpdateWithoutDoctorInput>
    create: XOR<LocationCreateWithoutDoctorInput, LocationUncheckedCreateWithoutDoctorInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutDoctorInput, LocationUncheckedUpdateWithoutDoctorInput>
  }

  export type LocationUpdateManyWithWhereWithoutDoctorInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutDoctorInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    doctorId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringNullableFilter<"Location"> | string | null
    city?: StringNullableFilter<"Location"> | string | null
    state?: StringNullableFilter<"Location"> | string | null
    country?: StringNullableFilter<"Location"> | string | null
    zipCode?: StringNullableFilter<"Location"> | string | null
    phone?: StringNullableFilter<"Location"> | string | null
    isLocationVerified?: BoolFilter<"Location"> | boolean
    verifiedBy?: StringNullableFilter<"Location"> | string | null
    isActive?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
  }

  export type ServiceUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutDoctorInput, ServiceUncheckedUpdateWithoutDoctorInput>
    create: XOR<ServiceCreateWithoutDoctorInput, ServiceUncheckedCreateWithoutDoctorInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutDoctorInput, ServiceUncheckedUpdateWithoutDoctorInput>
  }

  export type ServiceUpdateManyWithWhereWithoutDoctorInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: DoctorProfileWhereUniqueInput
    update: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
  }

  export type DoctorProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: DoctorProfileWhereUniqueInput
    data: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type DoctorProfileUpdateManyWithWhereWithoutUserInput = {
    where: DoctorProfileScalarWhereInput
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type DoctorProfileScalarWhereInput = {
    AND?: DoctorProfileScalarWhereInput | DoctorProfileScalarWhereInput[]
    OR?: DoctorProfileScalarWhereInput[]
    NOT?: DoctorProfileScalarWhereInput | DoctorProfileScalarWhereInput[]
    id?: StringFilter<"DoctorProfile"> | string
    userId?: StringFilter<"DoctorProfile"> | string
    fullName?: StringFilter<"DoctorProfile"> | string
    bio?: StringNullableFilter<"DoctorProfile"> | string | null
    website?: StringNullableFilter<"DoctorProfile"> | string | null
    overallRating?: DecimalFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    profileImageUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    documentUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    resumeUrl?: StringNullableFilter<"DoctorProfile"> | string | null
    isVerified?: BoolFilter<"DoctorProfile"> | boolean
    verifiedBy?: StringNullableFilter<"DoctorProfile"> | string | null
    isActive?: BoolFilter<"DoctorProfile"> | boolean
    createdAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DoctorProfile"> | Date | string | null
  }

  export type DoctorRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: DoctorRatingWhereUniqueInput
    update: XOR<DoctorRatingUpdateWithoutUserInput, DoctorRatingUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorRatingCreateWithoutUserInput, DoctorRatingUncheckedCreateWithoutUserInput>
  }

  export type DoctorRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: DoctorRatingWhereUniqueInput
    data: XOR<DoctorRatingUpdateWithoutUserInput, DoctorRatingUncheckedUpdateWithoutUserInput>
  }

  export type DoctorRatingUpdateManyWithWhereWithoutUserInput = {
    where: DoctorRatingScalarWhereInput
    data: XOR<DoctorRatingUpdateManyMutationInput, DoctorRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotCreateNestedManyWithoutDoctorInput
    locations?: LocationCreateNestedManyWithoutDoctorInput
    services?: ServiceCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    phoneNumber?: string | null
    profileImageUrl?: string | null
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    isActive?: boolean
    timezone?: string | null
    locale?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    bookAppointments?: BookAppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentSlots?: AppointmentSlotUncheckedCreateNestedManyWithoutDoctorInput
    locations?: LocationUncheckedCreateNestedManyWithoutDoctorInput
    services?: ServiceUncheckedCreateNestedManyWithoutDoctorInput
    doctorProfiles?: DoctorProfileUncheckedCreateNestedManyWithoutUserInput
    doctorRatings?: DoctorRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUpdateManyWithoutDoctorNestedInput
    locations?: LocationUpdateManyWithoutDoctorNestedInput
    services?: ServiceUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    bookAppointments?: BookAppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentSlots?: AppointmentSlotUncheckedUpdateManyWithoutDoctorNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDoctorNestedInput
    services?: ServiceUncheckedUpdateManyWithoutDoctorNestedInput
    doctorProfiles?: DoctorProfileUncheckedUpdateManyWithoutUserNestedInput
    doctorRatings?: DoctorRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorRatingCreateManyAppointmentInput = {
    id?: string
    doctorId: string
    doctorProfileId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type BookAppointmentCreateManyAppointmentInput = {
    id?: string
    doctorId: string
    locationId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PaymentCreateManyAppointmentInput = {
    id?: string
    transactionId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status: string
    paymentMethod: string
    currencyCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorRatingUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDoctorRatingsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutDoctorRatingNestedInput
  }

  export type DoctorRatingUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorRatingUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookAppointmentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutBookAppointmentsNestedInput
    location?: LocationUpdateOneRequiredWithoutBookAppointmentNestedInput
  }

  export type BookAppointmentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentCreateManyLocationInput = {
    id?: string
    userId: string
    doctorProfileId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookAppointmentCreateManyLocationInput = {
    id?: string
    doctorId: string
    appointmentId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentSlotCreateManyLocationInput = {
    id?: string
    doctorId: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ServiceCreateManyLocationInput = {
    id?: string
    doctorId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutBookAppointmentsNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutBookAppointmentNestedInput
  }

  export type BookAppointmentUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentSlotUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutAppointmentSlotsNestedInput
  }

  export type AppointmentSlotUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentSlotUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutServicesNestedInput
    appointment?: AppointmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentCreateManyServiceInput = {
    id?: string
    userId: string
    doctorProfileId: string
    locationId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentCreateManyDoctorProfileInput = {
    id?: string
    userId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorSpecializationCreateManyDoctorProfileInput = {
    id?: string
    specialization: string
    documentUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorRatingCreateManyDoctorProfileInput = {
    id?: string
    doctorId: string
    appointmentId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type AppointmentUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorSpecializationUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorSpecializationUncheckedUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorSpecializationUncheckedUpdateManyWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorRatingUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDoctorRatingsNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutDoctorRatingNestedInput
  }

  export type DoctorRatingUncheckedUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorRatingUncheckedUpdateManyWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
  }

  export type AppointmentCreateManyUserInput = {
    id?: string
    doctorProfileId: string
    locationId: string
    serviceId: string
    appointmentDate: Date | string
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookAppointmentCreateManyDoctorInput = {
    id?: string
    locationId: string
    appointmentId: string
    date: Date | string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    status?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppointmentSlotCreateManyDoctorInput = {
    id?: string
    locationId: string
    day?: string | null
    startTime?: string | null
    endTime?: string | null
    appointmentSlotDuration?: number | null
    totalAppointmentSlots?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LocationCreateManyDoctorInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    phone?: string | null
    isLocationVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ServiceCreateManyDoctorInput = {
    id?: string
    locationId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorProfileCreateManyUserInput = {
    id?: string
    fullName: string
    bio?: string | null
    website?: string | null
    overallRating: Decimal | DecimalJsLike | number | string
    profileImageUrl?: string | null
    documentUrl?: string | null
    resumeUrl?: string | null
    isVerified?: boolean
    verifiedBy?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DoctorRatingCreateManyUserInput = {
    id?: string
    doctorProfileId: string
    appointmentId: string
    review: string
    rating: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutAppointmentNestedInput
    location?: LocationUpdateOneRequiredWithoutAppointmentNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutAppointmentNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutBookAppointmentNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutBookAppointmentNestedInput
  }

  export type BookAppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookAppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentSlotUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutAppointmentSlotNestedInput
  }

  export type AppointmentSlotUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentSlotUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentSlotDuration?: NullableIntFieldUpdateOperationsInput | number | null
    totalAppointmentSlots?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUpdateManyWithoutLocationNestedInput
    service?: ServiceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutLocationNestedInput
    bookAppointment?: BookAppointmentUncheckedUpdateManyWithoutLocationNestedInput
    appointmentSlot?: AppointmentSlotUncheckedUpdateManyWithoutLocationNestedInput
    service?: ServiceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isLocationVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutServiceNestedInput
    appointment?: AppointmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateManyWithoutDoctorProfileNestedInput
    doctorSpecialization?: DoctorSpecializationUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUpdateManyWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUncheckedUpdateManyWithoutDoctorProfileNestedInput
    doctorSpecialization?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorProfileNestedInput
    doctorRating?: DoctorRatingUncheckedUpdateManyWithoutDoctorProfileNestedInput
  }

  export type DoctorProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    overallRating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorRatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    doctorProfile?: DoctorProfileUpdateOneRequiredWithoutDoctorRatingNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutDoctorRatingNestedInput
  }

  export type DoctorRatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoctorRatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorProfileId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}