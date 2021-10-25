class TesteController {

  async handle(event: any): Promise<any> {
    try {
      return Promise.resolve({
        success: true
      });
    } catch (e) {
      return Promise.resolve({
        error: true
      });
    }
  }
}

export {TesteController};