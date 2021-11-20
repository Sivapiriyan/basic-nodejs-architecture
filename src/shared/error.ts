/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 08:21:35
 * @modify date 2021-11-20 08:21:35
 * @desc [description]
 */
class BadRequest extends Error {
  public constructor(public data: unknown) {
    super(JSON.stringify(data));
    this.name = 'BadRequest';
    // this.stack = (<any>new Error()).stack;
  }
}

export { BadRequest };
