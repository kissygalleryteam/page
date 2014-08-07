KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('page', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/page/2.0.3/']});