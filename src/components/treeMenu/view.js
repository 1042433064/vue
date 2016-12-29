import $ from 'jquery'
import _ from 'underscore';
import Backbone from 'backbone';
export default Backbone.View.extend({
		treeTemplate:(function(){
			return _.template(
				'<%_.each(data,function(val,key){' +
				'	let ischild=val.children&&val.children.length;' +
				'%>' +
				'	<li data-asyncUrl="<%=val.asyncUrl%>" >' +
				'		<a data-selected="<%=val.selected%>" onclick="<%=val.onclick%>" ' +
				'<%_.each(val.prop,function(v,k){%>' +
				'	<%=k+"="+v+" "%>' +
				'<%})%>> ' +
				'			<i class="menu-icon <%if(val.icon){%><%=\'fa \'+val.icon%><%}%> <%if(ischild){%>more<%}%>"></i> ' +
				'			<span class="menu-name"  title="<%=val.name%>"> <%=val.name%> </span> ' +
				'			<%if(ischild&&val.rank==1&&!hideIcon){%>' +
				'			<b class="arrow fa fa-angle-down"></b> ' +
				'			<%}%>' +
				'		</a>' +
				'		<%=val.childrenHtml%>' +
				'	</li>' +
				'<%})%>'
			)
		})(),

		events : {
			'click li':'toggleShow',
		},
		toggleShow:function(e){
			let stateCallback=function stateCallback(){
				self.$el.data('state',self.$el.html());
			}
			let self=this;
			let $e=$(e.currentTarget);
			let asynsUrl=$e.data('asynsUrl');
			if(asynsUrl){
				$.ajax({
					cache: false,
					type: 'POST',
					url: asynsUrl,
					async : false,
					dataType:'json',
					success:function(data){
						$e.append('<ul  class="submenu">'+self.createTree(self.dataTransform(val.children))+'</ul>');
						$e.removeAttr('data-asynsUrl');
					}
				})
			}
			$('li.hide',this.el).removeClass('hide');
			let $parents=$e.parents('li');
			let $li=$parents.first();
			let $other={};
			$parents.not($parents.last()).removeClass('rotate');//移除父级菜单的加粗样式;
			if($e.find('>[onclick*="html?"]').length){
				window._router&&window._router.navigate('menu/'+$e.find('>a>span').attr('title').replace(/\//g,'%2F'));
				//$e.find('.active').removeClass('active rotate');
			}//在会触发页面更新的菜单上移除所有子菜单的激活状态
			$other=$('.active',this.$el).not($parents.add($e));
			if($other.length){
				$other.removeClass('rotate');
				if($other.find('>ul')){
					$other.find('>ul').slideUp(333,function(){
							$(this).removeAttr('style');
							$(this).parents('li').first().removeClass('active');
							stateCallback();
						});//移除其它无关元素的激活状态
				}
			}

			if($e.find('>ul').length){
				$e.addClass('rotate').find('>ul').slideDown(333,function(){
					$(this).removeAttr('style');
					$e.addClass('active');
					stateCallback();
				});//为当前元素添加激活状态
			}else{
				$e.addClass('rotate active')
			}//展开当前菜单的子菜单

			if($e.closest('ul').hasClass('submenu')){
				//$('.submenu').find('li.active').not($e).removeClass('active');
				e.stopPropagation();
			}//如果该菜单组为子菜单，则禁止冒泡
			stateCallback();

		},
		initialize : function() {
			window._treeMenu=this;
			let self = this;
			let model = self.model;
			let list = self.dataTransform();
			list= _.map(list,function(val,key){
				val.rank=1;
				return val;
			});
			self.$el.html(self.createTree(list));
			if(!self.$el.next('.tree-menu-search').length&&model.get('isSearch')){
				let $search=$('' +
					'<div class="form-comtrol tree-menu-search">' +
					'	<i class="fa fa-search"></i>' +
					'	<input type="text" placeholder="请输入关键字...">' +
					'	<div class="checkbox">' +
					'		<label>' +
					'			<input type="checkbox">隐藏其它' +
					'		</label>' +
					'	</div>' +
					'</div>'
				);
				let $text=$search.find('input[type=text]');
				let $checkbox=$search.find('input[type=checkbox]');
				self.$el.before($search);
				$text.off().on('keyup',_.debounce(function(e){
					self.search($text.val(),true)//$checkbox.prop('checked')
				},100));
				$checkbox.on('change',function(){
					$text.keyup();
				})
			}
		},
		createTree:function(list){
			let self=this;
			let html='';
			_.each(list,function(val,key){
				if(val.children&&val.children.length){
					val.childrenHtml='<ul  class="submenu">'+self.createTree(val.children)+'</ul>';
				}
				html+=self.treeTemplate({data:[val],hideIcon:self.model.get('hideIcon')});
			});
			return html;
		},
		select:function(el){
			let self=this,
				$el=el instanceof $?el:$(el,this.el),
				$selected=$el.length?$el:$('[data-selected="true"]',self.el);
			$selected= $selected.length?
				$selected:$('[data-selected]',self.el).filter(function(index){
					return /.shtml/.test($(this).attr('onclick'));
			}).first();
			//$selected.parents('li');//.add($selected.nextAll('ul'))
			let $lis=$();
			$selected.each(function(i,e){
				let $this=$(this);
				$lis=$lis.add($this.parents('li'));
			});
			if($selected.length===1){
				setTimeout(function(){
					$selected.click();
				},0)
			}else if($selected.length>1){
				$('li.active',this.el).removeClass('active rotate')
			}
			$lis.add($selected).addClass('active rotate');
		},
		search:function(el,isHideOther,isTriggerEvent,isOnly){
			let self=this;
			let $el=el instanceof $?el:$('li>a:contains("'+el+'")',this.el).filter(function(index){
				if(isOnly){
					return $.trim($(this).text())===el
				}
				return true
			});
			let $target=$el.first();
			let $lis=$();
			if(!el){
				this.$el.html(this.$el.data('state'));
				return
			}
			$el=$el.closest('li');
			$el.map(function(i,e){
				let $this=$(this);
				let $p=$this.parents('li');
				$lis=$lis.add($p);
				$el=$el.add($p.last());
			});
			$lis=$lis.add($el);
			$('li.active',this.el).removeClass('active rotate');
			$('li.hide',this.el).removeClass('hide');
			$lis.not('.active').addClass('active');
			$el.addClass('rotate');
			isHideOther&&$('li',this.el).not($lis).addClass('hide');
			isTriggerEvent&&$target.first().click();
		},
		findChild:function(_list,where){
			let list= _.clone(_list);
			let self=this;
			let child=_.where(list,where);
			list=_.filter(list,function(val,key){
				let has=true;
				_.each(child,function(v,_k){
					if(_.isEqual(val,v)){
						has=false;
						return false
					}
				});
				return has
			});
			if(child.length){
				child=_.map(child,function(val,key){
					let parentKey=self.getParent(val).key;
					let id=val['id']||val['Id'];
					let find={};
					find[parentKey]=id;
					val.children=self.findChild(list,find);
					return val;
				})
			}
			return child
		},
		getParent:function(obj){
			let parentKey=this.model.get('parentKey');
			let newObj={};
			if(parentKey){
				newObj.key=parentKey;
				newObj.val=obj[parentKey];
			}else{
				newObj.key=(obj['parentid']>-1&&'parentid')
					||(obj['parentId']>-1&&'parentId')
					||(obj['parent-id']>-1&&'parent-id')
					||(obj['parent_id']>-1&&'parent_id');
				newObj.val=obj[newObj.key];
			}
			return newObj
		},
		dataTransform:function(_list){
			let self=this;
			let model=self.model;
			let parentKey=model.get('parentKey');
			let childKey=model.get('childKey');
			let list=_list||model.get('list');
			if(!parentKey){
				return list
			}
			if(!list||!list.length){
				return list
			}
			let rootmenu=_.filter(list,function(val,key){
				return !_.where(list,{id:self.getParent(val).val}).length
			});
			let newData=_.map(rootmenu,function(val,key){
				let parentKey=self.getParent(val).key;
				let id=val['id']||val['Id'];
				let find={};
				find[parentKey]=id;
				val.children=self.findChild(list,find);
				return val;
			});
			return newData;
		}
	});