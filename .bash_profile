	# =================
	# rbenv
	# =================
	PATH="$HOME/.rbenv/bin:$PATH"                              # RBENV
	
	# start rbenv (our Ruby environment and version manager) on open
	if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi

	# Check to remove rvm
	if hash rvm 2>/dev/null || [ -d ~/.rvm ]; then
    yes | rvm implode
	rm -rf ~/.rvm
	else
	show "RVM is not installed. Moving on."
	fi

	# Install rbenv
	RBENV_DIR="$HOME/.rbenv"
	if [[ -e "$RBENV_DIR" ]]; then
	  show "Already installed! Moving on..."
	else
	  # Not using brew install (on Mac) because it is problematic...
	  git clone https://github.com/sstephenson/rbenv.git "$RBENV_DIR"
	fi

	# Install rbenv plugins
	RBENV_REHASH="${RBENV_DIR}/plugins/rbenv-gem-rehash"
	RBENV_DEFAULT="${RBENV_DIR}/plugins/rbenv-default-gems"
	RBENV_BUILD="${RBENV_DIR}/plugins/ruby-build"

	if [[ -e "$RBENV_REHASH" ]]; then
	  show "Rehash plugin already installed! Moving on..."
	else
	  # Automatically install gems every time you install a new version of Ruby
	  git clone https://github.com/sstephenson/rbenv-gem-rehash.git "$RBENV_REHASH"
	fi

	if [[ -e "$RBENV_DEFAULT" ]]; then
	  show "Default gems plugin installed! Moving on..."
	else
	  # Automatically runs rbenv rehash every time you install or uninstall a gem
	  git clone https://github.com/sstephenson/rbenv-default-gems.git "$RBENV_DEFAULT"
	fi

	if [[ -e "$RBENV_BUILD" ]]; then
	  show "Ruby build plugin already installed! Moving on..."
	else
	  # Provides an `rbenv install` command
	  # ruby-build is a dependency of rbenv-default-gems, so it gets installed
	  # TODO (PJ) remove then?
	  git clone https://github.com/sstephenson/ruby-build.git "$RBENV_BUILD"
	fi

	# Install Gems
	echo "gem: --no-ri --no-rdoc" > ~/.gemrc

	touch "${RBENV_DIR}/default-gems"

	# Our gems to install
	GEMLIST=(
	  bundler         # Maintains a consistent environment for ruby applications.
	  # capybara        # Acceptance test framework for web applications
	  # guard           # handle events on file system modifications
	  # jasmine         # JavaScript testing
	  pry             # alternative to the standard IRB shell
	  # pry-coolline    # live syntax highlighting for the Pry REPL
	  rails            # full stack, Web application framework
	  # rspec           # testing tool for Ruby
	  sinatra         # a DSL for quickly creating web applications in Ruby
	  sinatra-contrib # common Sinatra extensions
	  github_api      # Ruby interface to github API v3
	  awesome_print   # pretty print your Ruby objects with style
	  rainbow         # colorizing printed text on ANSI terminals
	)

	for gem in ${GEMLIST[@]}; do
	  echo "${gem}" >> "${RBENV_DIR}/default-gems"
	done

	# Install Ruby
	BELOVED_RUBY_VERSION="2.2.3"
	CURRENT_STABLE_RUBY_VERSION="2.2.3"

	ruby_check=$(rbenv versions | grep $BELOVED_RUBY_VERSION)

	if [[ "$ruby_check" == *$BELOVED_RUBY_VERSION* ]]; then
	  show "$BELOVED_RUBY_VERSION is installed! Moving on..."
	else
	  rbenv install $BELOVED_RUBY_VERSION
	fi

	rbenv global $BELOVED_RUBY_VERSION
	rbenv rehash